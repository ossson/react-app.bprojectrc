'use strict';

const vorpal = require('vorpal')()

/**
 *
 */
vorpal
  .command('serve')
  .allowUnknownOptions()

/**
 *
 */
vorpal
  .command('clear')
  .alias('cls')
  .action(function (args, cb) {
    let blank = ''
    for (let i = 0; i < process.stdout.rows; ++i) {
      blank += '\n'
    }
    vorpal.ui.redraw(blank)
    vorpal.ui.redraw('')
    cb()
  })

/**
 *
 */
vorpal
  .delimiter('react-app~$')
  .show()
