import Image from 'next/image'
import { Typography } from '@material-ui/core'

import { FullCenteredContainer } from './styled'

export const ErrorPage = ({ message }: { message: string }) => {
  return (
    <FullCenteredContainer>
      <Image
        src="/assets/images/thanos.gif"
        width={300}
        height={169.5}
        alt="Thanos gif"
      />

      <div style={{ textAlign: 'center' }}>
        <Typography variant="h6">
          <strong>Oh no :(</strong>
        </Typography>

        <Typography variant="subtitle2" color="textSecondary">
          <strong>{message}</strong>
        </Typography>
      </div>
    </FullCenteredContainer>
  )
}
