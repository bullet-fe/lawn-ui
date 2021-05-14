const config = require('../config/config.json');

// 获取全部的选项
const packages =  []
config.components.forEach((item)=>{
    item.packages.forEach((item2)=>{
        packages.push(item2)
    })
})


module.exports = function (plop) {
    plop.setGenerator('component', {
        description: '组件',
        prompts: [
        {
            type: 'list',
            name: 'item',
            message: '请选择创建组件的名字, 按回车键创建',
            choices: ()=>{
                const arr = packages.map((item)=>{
                    return {
                        name:`${item.name}/${item.cName} -- ${item.desc}`,
                        value:item.name,
                        checked:item.isDev,
                        type: item.type
                    }
                })
                return arr
            }
        }
            ],
        actions: [
            {
                type: 'add',
                path: '../packages/{{item}}/index.vue',
                templateFile: '../config/templates/template.vue'
            },
            {
                type: 'add',
                path: '../packages/{{item}}/index.less',
                templateFile: '../config/templates/template.less'
            },
            {
                type: 'add',
                path: '../packages/{{item}}/index.md',
                templateFile: '../config/templates/template.md'
            },
            {
                type: 'modify',
                path: '../config/config.json',
                transform:(fileStr,enterObj)=>{
                    return fileStr
                }
            }
        ]
    });
};