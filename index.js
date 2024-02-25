function generateRandomWord() {
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    let word = '';
    const length = Math.floor(Math.random() * (10 - 3 + 1)) + 3; // 可以根据需要调整单词长度范围

    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            word += consonants.charAt(Math.floor(Math.random() * consonants.length));
        } else {
            word += vowels.charAt(Math.floor(Math.random() * vowels.length));
        }
    }

    return word;
}

// 示例用法
const randomWord = generateRandomWord();
console.log(randomWord);