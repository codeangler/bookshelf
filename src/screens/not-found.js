/** @jsx jsx */
import {jsx} from '@emotion/core'

// 🐨 get the Link component from '@reach/router'

function NotFound() {
  return (
    <div
      css={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 🐨 render a div here that mentions there's nothing here */}
      {/* 🐨 render a <Link /> to take people home */}
    </div>
  )
}

export default NotFound
// const Finished = require('./not-found.finished.js')
// export default Finished.default