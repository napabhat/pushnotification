var tokens = [
    {
        "id": 1,
        "token": "d_B8-wedUMI:APA91bHIuMgGuVbcWqngctaduQLq7TkHRDXV-v8zb79DwvNmM_OiZtp3OyJvp7AN66JDcn0P8OIuz14wOAGimG_S0Hvy9gwYS66gGJelULD-yIZknPI2cACu_Om0kxW9xpbsULXzukFu"
    },
    {
        "id": 2,
        "token": "eIGilhdXaCU:APA91bGYAopM45dV7L4pzXtaNqk61FVGSxnvNq3shCEk04JUWqfa363R15jvVw9s3PDoq7wSPGNsW-8iIslyE757Oqrz18rG7KKraPGF5M3rmLOBCHp2pTKQ8Xc-D633L7c3agwzxapd"
    },
    {
        "id": 3,
        "token": "cfgvIICDSsw:APA91bFY-gvsNY5Ztb-0aSk_tmgsQAOS2MiqWARy9F8f-0WvbD8UFdsS5JgpdgMG-nQnnNVULojSycKlrB30gwb_yn-nxYCTlYkg-hVNj8ZFGi701PS9QThw5kMmuO7G-QXhr7PaDnjJ"
    },
    {
        "id": 4,
        "token": "fAC7-VkKw8U:APA91bHbMKLi7d1xiBfc4jUdy1aaQ9Bqmd4qPe60aW2s8C2Tv-jbidVZsamn3lRl29aLcknKjxZgwnwS3NU-avGmK4T7BFqWnn_sMN-RQq81K5xf7LyBioptEosPuneHZt8zSbbbuf_T"
    }
];

exports.findAll = function() {
    return tokens;
};

exports.findById = function (id) {
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].id == id) return tokens[i];
    }
};