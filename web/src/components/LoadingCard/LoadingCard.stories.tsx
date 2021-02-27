import LoadingCard from './LoadingCard'

export const Default = () => <LoadingCard />

export const Small = () => <LoadingCard spinnerProps={{ size: 'sm' }} />

export const Border = () => (
  <LoadingCard spinnerProps={{ animation: 'border' }} />
)

export const Colored = () => (
  <>
    <LoadingCard spinnerProps={{ variant: 'primary' }} />
    <LoadingCard spinnerProps={{ variant: 'secondary' }} />
    <LoadingCard spinnerProps={{ variant: 'success' }} />
    <LoadingCard spinnerProps={{ variant: 'danger' }} />
    <LoadingCard spinnerProps={{ variant: 'warning' }} />
    <LoadingCard spinnerProps={{ variant: 'info' }} />
    <LoadingCard spinnerProps={{ variant: 'light' }} />
    <LoadingCard spinnerProps={{ variant: 'dark' }} />
  </>
)

export default { title: 'Components/LoadingCard' }
