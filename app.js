"use strict"

import fs from "fs"
import {SortTransform} from "./classTransfrom.js"

git add .
let infile = process.argv[2]
let outfile = process.argv[3]
let memoryUsage = 500*(2**20)

const rStream = fs.createReadStream(infile,  {highWaterMark: memoryUsage})
const wStream = fs.createWriteStream(outfile, {highWaterMark: memoryUsage})
const tStream = new SortTransform({highWaterMark: memoryUsage})

rStream.pipe(tStream).pipe(wStream)


