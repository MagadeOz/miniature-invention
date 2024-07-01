    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let arrs = [pronoun, adj, noun];
    
    for (let i = 0; i < arrs[0].length; i++) {
        for (let j = 0; j < arrs[1].length; j++) {
            for (let k = 0; k < arrs[2].length; k++) {
                console.log(arrs[0][i] + arrs[1][j] + arrs[2][k] + ".com");
            }
        }
    }