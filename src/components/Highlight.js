import Prism from 'prismjs'
import React, { useEffect } from 'react'

import '../../node_modules/prismjs/themes/prism-coy.css'

// Other languages can be added like so:
// import '../../../node_modules/prismjs/components/prism-yaml'
import '../../node_modules/prismjs/components/prism-java'
import '../../node_modules/prismjs/components/prism-bash'

export default ({ language, children }) => {
  useEffect(() => Prism.highlightAll(), [])

  return (
    <pre>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  )
}
