import * as React from 'react'

const CalendarIcon = () => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill="url(#a)" d="M0 0h30v30H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01042)" />
      </pattern>
      <image
        id="b"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB40lEQVR4nO3dyU3DQBxG8Y8lnIA6INQBlUA3rKIZljKgAkog3IIUDuaAkFhmHPsR5v2kOcE/seeRECLkJJKkVq2NcB+LP3AM30GPb33IG9fPDAAzAMwAMAPADAAzAGwZAQ6SXCR5TPKS7nX1x/WTz98/9io9vpf3cz1PMv3F/GC2klwneQ2/idR6TXKVZNJzL4ttJbnvceD/bd1l5AjXA5zEqq/LXjta4CBtP+18teZJ9ks3s+aX8EmSjYq5/24zyXHpUE2Aw4qZVhyVDtS81TpLsl0x14JZkt2SgZoAi4qZlhTtqX8JwwwAMwDMADADwAwAMwDMADADwAwAMwBsc4DbpP/Xc2hLfS/MRwDMADADwAwAMwDMADADwAwAMwDMADADwAwAMwDMADADwAwAMwDMADADwAwAMwDMADADwAwAMwDMADADwAwAMwDMADADwAwAMwDMADADwAwAMwDMADADwAwAMwDMADADwGquFTFLsvPN11u+ruhz6UDNI+CpYqYVxXtTE+CuYqYVN2PcyTRevv6ry9fv9djXIlcjnNCqrfNeO1poku6piD7pv7JuA3yOzCTdx3bMexz4qq95up/80Tf/o2mSsyQP6V6i0psy9Jq9n+tpKj6yRJIkSZIkSe16AxSOldL3k7zMAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
)

export default CalendarIcon
