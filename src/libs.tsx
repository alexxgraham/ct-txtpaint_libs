import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';

import { PackageLinks, PaintIndexState } from '@ag108/ct-utils';

const PKG_NAME = 'txtpaint';

export const Red = ({ setTab }: { setTab: TabDispatchAction }) => {
	return <PackageLinks modules={['dark', "light"]} pkgName={PKG_NAME} libName='red' backTab={PaintIndexState} setTab={setTab} />;
}
export const Blue = ({ setTab }: { setTab: TabDispatchAction }) => {
	return <PackageLinks modules={['dark', "light"]} pkgName={PKG_NAME} libName='blue' backTab={PaintIndexState} setTab={setTab} />;
}
export const Green = ({ setTab }: { setTab: TabDispatchAction }) => {
	return <PackageLinks modules={['dark', "light"]} pkgName={PKG_NAME} libName='green' backTab={PaintIndexState} setTab={setTab} />;
}
export const Yellow = ({ setTab }: { setTab: TabDispatchAction }) => {
	return <PackageLinks modules={['dark', "light"]} pkgName={PKG_NAME} libName='yellow' backTab={PaintIndexState} setTab={setTab} />;
}
export const Magenta = ({ setTab }: { setTab: TabDispatchAction }) => {
	return <PackageLinks modules={['dark', "light"]} pkgName={PKG_NAME} libName='magenta' backTab={PaintIndexState} setTab={setTab} />;
}
export const Cyan = ({ setTab }: { setTab: TabDispatchAction }) => {
	return <PackageLinks modules={['dark', "light"]} pkgName={PKG_NAME} libName='cyan' backTab={PaintIndexState} setTab={setTab} />;
}