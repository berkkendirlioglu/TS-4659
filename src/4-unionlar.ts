// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "highScore" isminde bir değişken oluşturalım. Bu değişken, bir sayı veya
// boolean değer alabilsin.


// Kodu buraya yazalım...

let highScore: number | boolean;

highScore = 250; 
console.log(highScore);

highScore = false;
console.log(highScore);


// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "stuff" isminde boş bir array oluşturalım. Bu array, sayılardan veya stringlerden
// oluşabilsin. Ancak sayılar ve string'ler bu array'in içinde bir arada olamasın. 
// Yani ya sayı array'i olabilsin, ya da string array'i olabilsin.


// Kodu buraya yazalım...

let stuff: number[] | string[];

stuff = [1, 2, 3, 4, 5];
console.log(stuff);

stuff = ["apple", "banana", "cherry"];
console.log(stuff);


// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "SkillLevel" isminde bir literal türü oluşturalım (enum değil, literal tür).
// Bu tür, "Beginner", "Intermediate", "Advanced", ve "Expert" değerlerini alabilsin.


// Kodu buraya yazalım...

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
let mySkillLevel: SkillLevel;

mySkillLevel = "Beginner";
console.log(mySkillLevel);

mySkillLevel = "Expert";
console.log(mySkillLevel);

// mySkillLevel = "Master"; // Master type'ı olmadığı için hata dönecek!

// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "SkiSchoolStudent" isminde bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - name bir string olsun
// - age bir numara olsun
// - sport değeri "ski" veya "snowboard" olsun
// - level ise yukarıda oluşturduğumuz SkillLevel türünden bir değer olsun


// Kodu buraya yazalım...

type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: "ski" | "snowboard";
    level: SkillLevel;
};

const student1: SkiSchoolStudent = {
    name: "John Doe",
    age: 22,
    sport: "ski",
    level: "Intermediate"
};

const student2: SkiSchoolStudent = {
    name: "Jane Smith",
    age: 20,
    sport: "snowboard",
    level: "Advanced"
};

console.log(student1);
console.log(student2);



// **********************************************
// ******************* BÖLÜM 5 ******************
// **********************************************
// RGB renklerini temsil eden bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - r bir numara olsun
// - g bir numara olsun
// - b bir numara olsun


// Kodu buraya yazalım...

type RGB = {
    r: number;  
    g: number; 
    b: number; 
};

const color: RGB = {
    r: 255,
    g: 165,
    b: 0 
};

console.log(color);

// HSL renklerini temsil eden bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - h bir numara olsun
// - s bir numara olsun
// - l bir numara olsun


// Kodu buraya yazalım...

type HSL = {
    h: number;
    s: number;
    l: number;
};

const HSLColor: HSL = {
    h: 180,
    s: 50,
    l: 50,
};
console.log(HSLColor);


// "colors" isminde boş bir array oluşturalım. Bu array, yukarıda oluşturduğumuz iki 
// türden oluşabilsin. Yani bu array'in içinde hem RGB renkler, hem de HSL renkler 
// bulunabilsin.


// Kodu buraya yazalım...

let colors: (RGB | HSL)[] = [];

colors.push({ r: 255, g: 0, b: 0 }); 
colors.push({ h: 240, s: 100, l: 50 });

console.log(colors);


// **********************************************
// ******************* BÖLÜM 6 ******************
// **********************************************
// "greet" isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre olarak:
// - string
// veya
// - string'lerden oluşan array
// alabilsin. Eğer fonksiyona bir string girilirse (isim string'i), fonksiyon bu
// string için "Merhaba, İSİM" şeklinde bir string yazdırsın. Eğer fonksiyona bir
// array girilirse, fonksiyon bu array'in her bir string elemanı için ayrı ayrı
// "Merhaba, İSİM" şeklinde bir string yazdırsın.


// Kodu buraya yazalım...


function greet(names: string | string[]): void {
    if (typeof names === "string") {
        console.log(`Merhaba, ${names}`);
    } else {
        names.forEach(name => {
            console.log(`Merhaba, ${name}`);
        });
    }
}

greet("Ahmet");
greet(["Ali", "Ayşe"]);