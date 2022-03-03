module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res.json({
        text: "20220302 - Better for sorting I am thinking. But who really knows. Most likely no one. For now though, we will keep picking away at it. It actually doesn't take that much."
    });
}
