
export function createdData(depth, leaflen) {
    let indexId = 0

    let root = {
        name: 'root',
        id: indexId++
    }

    function createChild(depth) {
        let len = parseInt(Math.random() * leaflen) + 1
        let mustId = parseInt(Math.random() * len)
        let child = null

        if (depth > 0) {
            child = []
            depth--
            for (let i = 0; i < len; i++) {
                let leaf = {
                    name: depth + '' + i + indexId,
                    id: indexId++
                }
                if (i === mustId || parseInt(Math.random() * 10 + 1) % 5 == 0) {
                    let leafchild = createChild(depth)
                    if (leafchild) {
                        leaf.children = leafchild
                    }
                }

                child.push(leaf)
            }
        }
        return child
    }

    let child = createChild(depth)
    if (child) {
        root.children = child
    }
    return root
}

export const realData = {
    name: "深圳环宇科技集团有限公司",
    id: 0,
    children: [{
        name: "深圳环宇科技（厦门）集团有限公司",
        id: 1,
        children: [{
            name: "行政中心",
            id: 4
        },
        {
            name: "市场部门",
            id: 5,
            preChildren: true
        },
        {
            name: "研发中心",
            id: 6,
            children: [{
                name: "项目开发组",
                id: 12,
                children: [{
                    name: "后端开发组",
                    id: 17
                },
                {
                    name: "前端开发组",
                    id: 18
                },
                {
                    name: "测试组",
                    id: 19
                }
                ]
            },
            {
                name: "运维中心",
                id: 13,
                children: [{
                    name: "桌面运维",
                    id: 15
                },
                {
                    name: "安全运维",
                    id: 16
                }
                ]
            },
            {
                name: "服务与部署",
                id: 14
            }
            ]
        }
        ]
    },
    {
        name: "深圳环宇科技（广州）集团有限公司",
        id: 2,
        children: [{
            name: "广州白云销售中心",
            id: 7,
            children: [{
                id: 27,
                name: "马智波",
                type: "staff"
            },
            {
                id: 28,
                name: "李知更",
                type: "staff"
            }
            ]
        },
        {
            id: 8,
            name: "张一桂",
            type: "staff",
            children: [{
                id: 29,
                name: "雷行者",
                type: "staff"
            },
            {
                id: 30,
                name: "东哥",
                type: "staff"
            }
            ]
        }
        ]
    },
    {
        name: "深圳环宇科技（上海）集团有限公司",
        id: 3,
        children: [{
            name: "上海财务中心",
            id: 9
        },
        {
            name: "上海招聘与薪酬中心",
            id: 10
        },
        {
            name: "上海市场部门",
            id: 11,
            children: [{
                name: "外滩门店",
                id: 25
            },
            {
                name: "明珠塔门店",
                id: 26
            }
            ]
        }
        ]
    },
    {
        name: "深圳环宇科技（北京）集团有限公司",
        id: 21,
        children: [{
            name: "北京对外办事处",
            id: 22
        },
        {
            name: "北京财务结算中心",
            id: 23
        },
        {
            name: "北京行政中心",
            id: 24
        }
        ]
    }
    ]
}