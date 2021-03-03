import LoadingComp from './LoadingComp'

export const Default = () => {
  return <LoadingComp />
}

export const OverrideAnimation = () => {
  return <LoadingComp spinnerProps={{ animation: 'border' }} />
}

export const OverrideVariant = () => {
  return <LoadingComp spinnerProps={{ variant: 'secondary' }} />
}

export default { title: 'Components/LoadingComp' }
