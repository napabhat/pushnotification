var tokens = [
    {
        "id": 1,
        "token": "d_B8-wedUMI:APA91bHIuMgGuVbcWqngctaduQLq7TkHRDXV-v8zb79DwvNmM_OiZtp3OyJvp7AN66JDcn0P8OIuz14wOAGimG_S0Hvy9gwYS66gGJelULD-yIZknPI2cACu_Om0kxW9xpbsULXzukFu"
    },
    {
        "id": 2,
        "token": "dAR1zCaKHuY:APA91bEo3ERvuBptBSgqJwHPkWjsS0-63HDp3HAg6fXDKof6p2aPRQcfKXnrIAoV0XFe397Ay2Rb48z8y1yeJonobE-dUEB6WvBL1K6X9NMw-lPhX_7SsyMX7O1VBpvHJXT8kQttgnWJ"
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