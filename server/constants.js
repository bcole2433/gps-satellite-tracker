﻿const CONSTANTS = {};

CONSTANTS.PORT = process.env.PORT || "5000";
CONSTANTS.GPS_IDS = [44506, 41328, 41019, 40730, 40534, 40294, 40105, 39741, 39533, 39166, 38833,
    37753, 36585, 35752, 32711, 32384, 32260, 29601, 29486, 28874, 28474, 28361, 28190, 28129, 27704,
    27663, 26605, 26407, 26360, 25933, 24876, 22877
];
CONSTANTS.GET_SAT_DATA='/api/get-satellites';

module.exports = CONSTANTS;
