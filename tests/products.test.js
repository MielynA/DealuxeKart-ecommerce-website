jest.mock("pg-promise");
const pgp = require("pg-promise");

pgp.mockImplementation(() => {
    return function() {
        return {
            none: () => Promise.resolve({'test':1}),
            one: () => Promise.resolve(),
        }
    } 
})

const productService = require ("../backend/services/products_services");

//--- TEST FOR POST PRODUCTS SERVICE 

test("objectWithoutInfo", ()=>{ 
  
productService.post(1,"Charles and Keith","Handbag" ,70,"white",80,"Handbag","test","{test}").then(data => {
        expect(data).toBe(undefined)
    })
})


test("objectWithInfo", ()=>{
    productService.post(1,"Charles and Keith","Handbag" ,70,"white",80,"Handbag","test","{test}" ).then(data => {
           // expect(data).toBe(data)
            expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}" })
        })
    })

//--- TEST FOR GET PRODUCTS SERVICE
test("objectWithoutInfo", ()=>{
productService.get(1,"Charles and Keith","Handbag" ,70,"white",80,"Handbag","test","{test}" ).then(data => {
        expect(data).toBe(undefined)    
    })
})

test("objectWithInfo", ()=>{
    productService.get(1,"Charles and Keith","Handbag" ,70,"white",80,"Handbag","test","{test}" ).then(data => {
            expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}"  })
        })
    })
//--- TEST FOR UPDATE/PUT PRODUCTS SERVICEž
test("objectWithoutInfo", ()=>{
    productService.put(1,"Charles and Keith","Handbag" ,70,"white",80,"Handbag","test","{test}" ).then(data => {
            expect(data).toBe(undefined)
        })
    })
    
test("objectWithInfo", ()=>{

    productService.put(1,"Charles and Keith","Handbag" ,70,"white",80,"Handbag","test","{test}" ).then(data => {
                expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}"   })
            })
        })

//--- TEST FOR DELETE PRODUCTS SERVICE
test("objectWithoutInfo", ()=>{
    productService.delete(1,"Charles and Keith","Handbag" ,70,"white",80,"Handbag","test","{test}" ).then(data => {
            expect(data).toBe(undefined)
        })
    })
test("objectWithInfo", ()=>{
        productService.delete(1,"Charles and Keith","Handbag" ,70,"white",80,"Handbag","test","{test}" ).then(data => {
                expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}"   })
            })
        })