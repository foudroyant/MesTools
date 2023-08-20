const translate = require('translate-google')

translate('Une édition spéciale pour vous', {from: 'fr', to: 'de'}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})