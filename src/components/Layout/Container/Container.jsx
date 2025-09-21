import classnames from 'classnames';
import style from"./Container.module.scss";

export const Container = ({className,children}) => {
 return (
   <div className={classnames (style.container,className)}>
     {children}
   </div>
 )
}