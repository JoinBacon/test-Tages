import {Transform} from "stream"

export class SortTransform extends Transform{
    _transform(chunk, encoding, callback) {
        // super._transform(chunk, encoding, callback);
        try {
            const strArray = chunk.toString("utf-8").split("\r\n")
            const collator = new Intl.Collator({numeric: "true"})
            const sortStr = strArray.sort(collator.compare).join("\r\n")
            callback(null, sortStr);
        }catch (e){
            callback(e)
        }
    }
}

