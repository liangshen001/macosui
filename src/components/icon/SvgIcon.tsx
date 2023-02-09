import React from 'react';

export type SvgIconProps = {} & React.SVGProps<SVGSVGElement>;

const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
    return (
        <svg width="1em" height="1em" {...props} ref={ref}  />
    );
});

export const svgIconFactory = (path: JSX.Element) => React.forwardRef<SVGSVGElement, SvgIconProps>((
    (props, ref) => <SvgIcon {...props} ref={ref}>{path}</SvgIcon>));
export default SvgIcon;