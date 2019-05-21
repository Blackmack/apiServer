
import JWT from 'jsonwebtoken'
import utils from '../lib/util'
import path from 'path'
import fs from 'fs'

class baseControll{
    constructor () {
      this.utils = utils
    }
}
export default baseControll