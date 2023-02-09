import React from 'react';
import styled from "styled-components";

const Knob = () => {
    return <>
        <svg width="12px" height="24px" viewBox="0 0 12 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <rect id="path-3lt77cpyyu-1" x="0" y="0" width="8" height="20" rx="4"></rect>
                <filter x="-26.6%" y="-6.9%" width="153.1%" height="122.5%" filterUnits="objectBoundingBox"
                        id="filter-3lt77cpyyu-2">
                    <feMorphology radius="0.5" operator="dilate" in="SourceAlpha"
                                  result="shadowSpreadOuter1"></feMorphology>
                    <feOffset dx="0" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="0.375" in="shadowOffsetOuter1"
                                    result="shadowBlurOuter1"></feGaussianBlur>
                    <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                 result="shadowBlurOuter1"></feComposite>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0" type="matrix"
                                   in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                    <feMorphology radius="0.5" operator="dilate" in="SourceAlpha"
                                  result="shadowSpreadOuter2"></feMorphology>
                    <feOffset dx="0" dy="0.25" in="shadowSpreadOuter2" result="shadowOffsetOuter2"></feOffset>
                    <feGaussianBlur stdDeviation="0.125" in="shadowOffsetOuter2"
                                    result="shadowBlurOuter2"></feGaussianBlur>
                    <feComposite in="shadowBlurOuter2" in2="SourceAlpha" operator="out"
                                 result="shadowBlurOuter2"></feComposite>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0" type="matrix"
                                   in="shadowBlurOuter2" result="shadowMatrixOuter2"></feColorMatrix>
                    <feMerge>
                        <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                        <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
                    </feMerge>
                </filter>
            </defs>
            <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Components---Bars,-Controls,-Menus,-and-Lists" transform="translate(-375.000000, -2851.000000)">
                    <g id="Lists" transform="translate(20.000000, 2147.000000)">
                        <g id="Forms" transform="translate(0.000000, 638.000000)">
                            <g transform="translate(20.000000, 20.000000)" id="Forms-Row">
                                <g transform="translate(0.000000, 37.000000)">
                                    <g id="Slider" transform="translate(233.180233, 10.000000)">
                                        <g id="Linear-Slider" transform="translate(27.338372, 0.000000)">
                                            <g id="Rectangle" transform="translate(76.406977, 0.000000)">
                                                <use fill="black" fill-opacity="1" filter="url(#filter-3lt77cpyyu-2)"
                                                     xlinkHref="#path-3lt77cpyyu-1"></use>
                                                <rect stroke-opacity="0.02" stroke="#000000" stroke-width="0.5"
                                                      fill="#FFFFFF" fill-rule="evenodd" x="-0.25" y="-0.25" width="8.5"
                                                      height="20.5" rx="4"></rect>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    </>;
}

const SliderWrapper = styled.span`
  display: inline-flex;
  height: 24px;
  width: 164px;
  align-items: center;
`

export interface SliderProps {

}

const Slider: React.FC<SliderProps> = (props) => {
    return (
        <SliderWrapper>
            <svg width="164px" height="10px" viewBox="0 0 164 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <path d="M163.347868,2 L163.347868,10 L161.080911,10 C161.633196,10 162.080911,9.55228475 162.080911,9 L162.080911,3 C162.080911,2.44771525 161.633196,2 161.080911,2 C160.528626,2 160.080911,2.44771525 160.080911,3 L160.080911,9 C160.080911,9.55228475 160.528626,10 161.080911,10 L121.694162,10 C122.246447,10 122.694162,9.55228475 122.694162,9 L122.694162,3 C122.694162,2.44771525 122.246447,2 121.694162,2 C121.141877,2 120.694162,2.44771525 120.694162,3 L120.694162,9 C120.694162,9.55228475 121.141877,10 121.694162,10 L81.6739341,10 C82.2262189,10 82.6739341,9.55228475 82.6739341,9 L82.6739341,3 C82.6739341,2.44771525 82.2262189,2 81.6739341,2 C81.1216494,2 80.6739341,2.44771525 80.6739341,3 L80.6739341,9 C80.6739341,9.55228475 81.1216494,10 81.6739341,10 L41.6537064,10 C42.2059911,10 42.6537064,9.55228475 42.6537064,9 L42.6537064,3 C42.6537064,2.44771525 42.2059911,2 41.6537064,2 C41.1014216,2 40.6537064,2.44771525 40.6537064,3 L40.6537064,9 C40.6537064,9.55228475 41.1014216,10 41.6537064,10 L2.26695736,10 C2.81924211,10 3.26695736,9.55228475 3.26695736,9 L3.26695736,3 C3.26695736,2.44771525 2.81924211,2 2.26695736,2 C1.71467261,2 1.26695736,2.44771525 1.26695736,3 L1.26695736,9 C1.26695736,9.55228475 1.71467261,10 2.26695736,10 L0,10 L0,2 L163.347868,2 Z" id="path-bs83ismp-x-1"></path>
                    <rect id="path-bs83ismp-x-3" x="1.26695736" y="2" width="160.813953" height="4" rx="2"></rect>
                    <filter x="-0.9%" y="-37.5%" width="101.9%" height="175.0%" filterUnits="objectBoundingBox" id="filter-bs83ismp-x-4">
                        <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                        <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                        <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.04 0" type="matrix" in="shadowInnerInner1" result="shadowMatrixInner1"></feColorMatrix>
                        <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner2"></feGaussianBlur>
                        <feOffset dx="0" dy="0" in="shadowBlurInner2" result="shadowOffsetInner2"></feOffset>
                        <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2"></feComposite>
                        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.03 0" type="matrix" in="shadowInnerInner2" result="shadowMatrixInner2"></feColorMatrix>
                        <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner3"></feGaussianBlur>
                        <feOffset dx="0" dy="1" in="shadowBlurInner3" result="shadowOffsetInner3"></feOffset>
                        <feComposite in="shadowOffsetInner3" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner3"></feComposite>
                        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.02 0" type="matrix" in="shadowInnerInner3" result="shadowMatrixInner3"></feColorMatrix>
                        <feMerge>
                            <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                            <feMergeNode in="shadowMatrixInner2"></feMergeNode>
                            <feMergeNode in="shadowMatrixInner3"></feMergeNode>
                        </feMerge>
                    </filter>
                </defs>
                <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Components---Bars,-Controls,-Menus,-and-Lists" transform="translate(-299.000000, -2858.000000)">
                        <g id="Lists" transform="translate(20.000000, 2147.000000)">
                            <g id="Forms" transform="translate(0.000000, 638.000000)">
                                <g transform="translate(20.000000, 20.000000)" id="Forms-Row">
                                    <g transform="translate(0.000000, 37.000000)">
                                        <g id="Slider" transform="translate(233.180233, 10.000000)">
                                            <g id="Linear-Slider" transform="translate(27.338372, 0.000000)">
                                                <g id="Slider-Ticks" transform="translate(0.000000, 6.000000)">
                                                    <g id="Number-of-Ticks" transform="translate(-1.266957, 0.000000)">
                                                        <g id="Group">
                                                            {/*<rect id="Rectangle" x="1.26695736" y="0" width="160.813953" height="8"></rect>*/}
                                                            {/*<mask id="mask-bs83ismp-x-2" fill="white">*/}
                                                            {/*    <use xlinkHref="#path-bs83ismp-x-1"></use>*/}
                                                            {/*</mask>*/}
                                                            <g id="Mask"></g>
                                                            <g id="Track" fill-rule="nonzero" mask="url(#mask-bs83ismp-x-2)">
                                                                <use fill-opacity="0.05" fill="#000000" xlinkHref="#path-bs83ismp-x-3"></use>
                                                                <use fill="black" fill-opacity="1" filter="url(#filter-bs83ismp-x-4)" xlinkHref="#path-bs83ismp-x-3"></use>
                                                            </g>
                                                        </g>
                                                        <g id="Slider-Tick" transform="translate(160.080911, 0.000000)" fill="#D9D9D9">
                                                            <rect id="Rectangle" x="0" y="0" width="2" height="8" rx="1"></rect>
                                                        </g>
                                                        <g id="Group" transform="translate(3.266957, 0.000000)">
                                                            <rect id="Rectangle" x="0" y="2" width="156.813953" height="4"></rect>
                                                            <g id="Slider-Tick" transform="translate(77.406977, 0.000000)" fill="#D9D9D9">
                                                                <rect id="Rectangle" x="0" y="0" width="2" height="8" rx="1"></rect>
                                                            </g>
                                                            <g id="Slider-Tick" transform="translate(117.427204, 0.000000)" fill="#D9D9D9">
                                                                <rect id="Rectangle" x="0" y="0" width="2" height="8" rx="1"></rect>
                                                            </g>
                                                            <g id="Slider-Tick" transform="translate(37.386749, 0.000000)" fill="#D9D9D9">
                                                                <rect id="Rectangle" x="0" y="0" width="2" height="8" rx="1"></rect>
                                                            </g>
                                                        </g>
                                                        <g id="Slider-Tick" transform="translate(1.266957, 0.000000)" fill="#D9D9D9">
                                                            <rect id="Rectangle" x="0" y="0" width="2" height="8" rx="1"></rect>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <Knob />
        </SliderWrapper>
    );
};

export default Slider;