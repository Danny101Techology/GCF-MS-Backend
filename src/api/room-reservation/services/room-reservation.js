'use strict';

/**
 * room-reservation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room-reservation.room-reservation');
