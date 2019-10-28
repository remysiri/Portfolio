import React from "react";
import { useSwipeable } from "react-swipeable";
import {
  CarouselContainer,
  CarouselSlot,
  PREV,
  NEXT
} from "./CarouselComponents";

const Carousel = props => {
	const numItems = React.Children.count(props.children);
	const initialState = { pos: 0, sliding: false, dir: NEXT };
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const getOrder = ({ index, pos, numItems }) => {
		if(index - pos < 0) {
			return numItems - Math.abs(index - pos)
		}
		return index - pos
	};

	const slide = dir => {
		dispatch({ type: dir, numItems });
		setTimeout(() => {
		dispatch({ type: "stopSliding" });
		}, 50);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => slide(NEXT),
		onSwipedRight: () => slide(PREV),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true
	});


	return (
		<div {...handlers}>
			<p className="works__numbered">{ state.pos + 1 } / { numItems }</p>
			<div className="works__wrapper">
				<CarouselContainer dir={state.dir} sliding={state.sliding}>
					{React.Children.map(props.children, (child, index) => (
						<CarouselSlot
							key={index}
							order={getOrder({ index: index, pos: state.pos, numItems })}
							>
								{child}
						</CarouselSlot>
					))}
				</CarouselContainer>
			</div>
		</div>
	);
};

function reducer(state, { type, numItems }) {
	if(type === PREV) {
		if(state.pos === 0) {
			return {
				...state,
				dir: PREV,
				sliding: false,
				pos: 0
			};
		} else {
			return {
				...state,
				dir: PREV,
				sliding: true,
				pos: state.pos === 0 ? numItems - 1 : state.pos - 1
			};
		}
	}

	if(type === NEXT) {
		if(state.pos === numItems - 1) {
			return {
				...state,
				dir: NEXT,
				sliding: false,
				pos: numItems - 1
			};
		} else {
			return {
				...state,
				dir: NEXT,
				sliding: true,
				pos: state.pos + 1
			};
		}
	}

	if (type === "stopSliding") {
		return { ...state, sliding: false };
	}
}

export default Carousel;