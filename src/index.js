const fs = require('fs')
const path = require('path')

module.exports = (ctx) => {
  const register = () => {
    ctx.helper.uploader.register('freebuf', {
      handle,
      name: 'Freebuf 图床'
    })
  }
  const postOptions = (image) => {
    return {
      method: 'POST',
      url: `https://www.freebuf.com/fapi/frontend/upload/image`,
      headers: {
        contentType: 'multipart/form-data; boundary=----WebKitFormBoundarylZujSDjBOuLA9c1Q'
      },
      formData: {
        file: image,
        is_base64: '0'
      }
    }
  }
  const handle = async (ctx) => {
    const imgList = ctx.output
    for (let i in imgList) {
      let image = imgList[i].buffer
      if (!image && imgList[i].base64Image) {
        image = Buffer.from(imgList[i].base64Image, 'base64')
      }
      const data = new Uint8Array(image)
      const fileName = imgList[i].fileName
      const filePath = path.join(__dirname, fileName)
      await fs.writeFileSync(filePath, data)
      const postConfig = postOptions(fs.createReadStream(filePath))
      let body = await ctx.Request.request(postConfig)
      fs.unlink(filePath, () => {})
      body = JSON.parse(body)
      if (body.code === 200) {
        delete imgList[i].base64Image
        delete imgList[i].buffer
        imgList[i].imgUrl = body.data.url.replace('!small', '')
      } else {
        ctx.emit('notification', {
          title: '上传失败',
          body: body.msg
        })
        throw new Error(body.msg)
      }
    }
    return ctx
  }

  return {
    uploader: 'freebuf',
    register
  }
}
