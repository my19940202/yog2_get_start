module.exports.search = function (name, region) {
    return yog.ralP('MAPAPI', {
        data: {
            region: region,
            query: name
        }
    });
}