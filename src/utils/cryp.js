import crypto from 'crypto'

const SECRET_KEY = '2jwbI.w_2'

export function hmacSha(content){
  let hmac = crypto.createHmac('sha512',SECRET_KEY)
  return hmac.update(content).digest('hex')
}