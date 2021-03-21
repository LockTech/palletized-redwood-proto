import { createLogger } from '@redwoodjs/api/logger'

/**
 * Creates a logger. Options define how to log. Destination defines where to log.
 * If no destination, std out.
 */
export const logger = createLogger({
  options: {
    prettyPrint: {
      colorize: true,
      ignore: 'hostname,pid',
      levelFirst: true,
      messageFormat: false,
      translateTime: 'yyyy-mm-dd HH:MM:ss',
    },
  },
})
