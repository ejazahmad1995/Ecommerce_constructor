function ProductList(pn,c,i,pr,g,s){
    this.name=pn;
    this.category=c;
    this.image=i;
    this.price=pr;
    this.gender=g;
    this.sold=s;
};





function product(event){
    event.preventDefault()

    let product=document.getElementById("product");

    let proname=product.name.value;

    let cat=product.category.value;

    let img=product.image.value;

    let prc=product.price.value;

    let gen=product.gender.value;

    let sol=product.sold.value;

    let p1=new ProductList(proname,cat,img,prc,gen,sol);



    let data=JSON.parse(localStorage.getItem("pData")) ||[];

    data.push(p1);

    localStorage.setItem("pData",JSON.stringify(data));


};