export const JIA = "JIA";
export const JIAN = "JIAN";
export const CHONGZHI = "CHONGZHI";

export function jia() {
    console.log("*******")
    return {type: JIA}
}

export function jian() {
    return {type: JIAN}
}

export function chongzhi() {
    return {type: CHONGZHI}
}