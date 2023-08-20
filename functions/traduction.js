const translate = require('translate-google')

exports.handler = async function(event, context){
    const params = event.queryStringParameters;
    const translated = await translate(params["text"], {from: params["from"], to: params["to"]});

    return {
        statusCode : 200,
        body : JSON.stringify({
            traduction : translated
        })
    }
}