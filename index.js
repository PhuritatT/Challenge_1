var challenge_1 = () => {
    for (let i = 1; i <= 100; i++) {
        let string = ''
        if (i % 3 == 0) {
            string += 'Three'
        }
        if (i % 5 == 0) {
            string += 'Five'
        }
        if (string === '') {
            console.log(i)
        } else {
            console.log(string)
        }

    }
}
challenge_1()