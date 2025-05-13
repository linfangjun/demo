function Student(name,sex,age,telephone,address){
	this.name=name;
	this.sex=sex;
	this.age=age;
	this.telephone=telephone;
	this.address=address;
}
Student.prototype.getInfo=function(){
	return this.name+','+this.sex+','+this.age+','+this.telephone+','+this.address;
};
var student = new Student('林放军','先生','20','13135119207','湖南岳阳');
console.log(student.getInfo());
