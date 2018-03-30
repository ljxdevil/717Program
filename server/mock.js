const Mock = require('mockjs')
const { Random } = Mock
const fs = require('fs')
Random.extend({
    mealType: () => {
        let arr = ['热销', '套餐类', '烧饼类', '进店必买', '酱肉类', '凉菜类', '汤类', '饮料'];
        console.log(Random)
        return Random.pick(arr)
    }
})
let res = Mock.mock({
    "success": 1,
    "info": "请求成功",
    "code": 1001,
    "list|8": [{
        "title": () => Random.mealType(),
        "goodslist|6": [{ // 每次返回6条
            // "goods_id":()=>Random.
            "name": () => Random.cword(2, 5),
            "detail": () => Random.cparagraph(), // 描述信息，文字随机生成的
            "price": () => Random.natural(1, 99),
            "img": () => Random.image('800x800', Random.color(), '#fff', 'png', '!'),
            // "store_id":,
            // "store_name":
        }]
    }]
})
fs.writeFileSync('meal.json', JSON.stringify(res))