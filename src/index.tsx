import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';
import { PackageLibraries } from '@ag108/ct-utils/types/main';

import { PackageIndexLink } from '@ag108/ct-utils';

import { BlueState, CyanState, GreenState, MagentaState, RedState, YellowState } from '~/state';

const libraries: PackageLibraries = [
	{ name: 'red', tabState: RedState },
	{ name: 'blue', tabState: BlueState },
	{ name: 'green', tabState: GreenState },
	{ name: 'yellow', tabState: YellowState },
	{ name: 'magenta', tabState: MagentaState },
	{ name: 'cyan', tabState: CyanState },
]

export const IndexPaint = ({ setTab }: { setTab: TabDispatchAction }) => {
	return (
		<article className='flex flex-col pt-2'>
			<p className='text-accent uppercase'>
				[<PackageIndexLink setTab={setTab} />] colors library ({libraries.length}):
			</p>
			<ol className='flex flex-col px-4 items-start h-[140px] overflow-scroll'>
				{libraries.map((library, i) => (
					<li key={i + 1}>
						<button onClick={() => setTab(library.tabState)} className='uppercase outline-none'>
							{i + 1}) [<span className='hover:underline cursor-pointer'>{library.name}</span>]
						</button>
					</li>
				))}
			</ol>
		</article>
	);
}

export { Red, Blue, Green, Yellow, Magenta, Cyan } from '~/libs'