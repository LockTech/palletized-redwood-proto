export interface LocaleTimeProps {
  datetime: string
}

const LocaleTime: React.FC<LocaleTimeProps> = ({ datetime }) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toLocaleString()}
    </time>
  )
}

export default LocaleTime
