export default {
    name: 'fortunes',
    contents: [
        "Conquer your fears or they will conquer you.",
        "Rivers need springs.",
        "Do not fear what you don't know.",
        "You will have a pleasant surprise.",
        "Whenever possible, keep it simpmle.",
    ],
    getFortune() {
        let index = Math.floor(Math.random() * this.contents.length);
        return this.contents[index];
    },
}