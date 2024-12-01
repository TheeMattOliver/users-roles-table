import classNames from './VisuallyHidden.module.css'

const VisuallyHidden = ({children}: {children: React.ReactNode}) => {
  return <span className={classNames.VisuallyHidden}>{children}</span>
}
export default VisuallyHidden
