# Orangeman.

:root {
--OFF:initial;
--ON: ;
--basics-S:var(--OFF);
--basics-M:var(--OFF);
--basics-L:var(--OFF);
--basics-XL:var(--OFF);
--basics-XXL:var(--OFF)
}
_,
:after,
:before {
box-sizing:border-box
}
body,
html {
text-rendering:optimizeLegibility;
-webkit-font-smoothing:antialiased;
-moz-osx-font-smoothing:grayscale;
touch-action:manipulation
}
b,
strong {
font-weight:bolder
}
code,
kbd,
pre,
samp {
font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
font-size:1em
}
sub,
sup {
font-size:60%;
line-height:0;
position:relative;
vertical-align:baseline
}
sub {
bottom:-.25em
}
sup {
top:-.5em
}
button,
input,
optgroup,
select,
textarea {
font-family:inherit;
font-size:100%;
line-height:1.15;
margin:0
}
svg {
shape-rendering:auto;
vertical-align:middle
}
blockquote,
figure {
margin:0
}
a {
color:inherit
}
[basics-text] {
margin:0
}
[basics-text][basics-variant-weight="100"] {
font-weight:100
}
[basics-text][basics-variant-weight="200"] {
font-weight:200
}
[basics-text][basics-variant-weight="300"] {
font-weight:300
}
[basics-text][basics-variant-weight="400"] {
font-weight:400
}
[basics-text][basics-variant-weight="500"] {
font-weight:500
}
[basics-text][basics-variant-weight="600"] {
font-weight:600
}
[basics-text][basics-variant-weight="700"] {
font-weight:700
}
[basics-text][basics-variant-weight="800"] {
font-weight:800
}
[basics-text][basics-variant-weight="900"] {
font-weight:900
}
[basics-text][basics-variant-align=left] {
text-align:left
}
[basics-text][basics-variant-align=center] {
text-align:center
}
[basics-text][basics-variant-align=right] {
text-align:right
}
[basics-text][basics-variant-transform=uppercase] {
text-transform:uppercase
}
[basics-text][basics-variant-transform=lowercase] {
text-transform:lowercase
}
[basics-text][basics-variant-transform=capitalize] {
text-transform:capitalize
}
[basics-text][basics-variant-break=break-all] {
word-break:break-all
}
[basics-text][basics-variant-break=break-word] {
word-break:break-word
}
[basics-text][basics-variant-clamp=""] {
display:inline-block;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
word-wrap:normal;
max-width:100%;
min-width:0
}
[basics-text][basics-variant-clamp=_] {
display:-webkit-box;
overflow:hidden;
text-overflow:ellipsis;
-webkit-line-clamp:var(--clamp-lines);
-webkit-box-orient:vertical
}
[basics-text][basics-variant~=tnum] {
font-feature-settings:"tnum" 1
}
[basics-stack] {
position:relative;
display:flex;
flex:var(--basics-F,initial);
min-width:0;
max-width:100%;
flex-wrap:var(--basics-W,nowrap) wrap;
--\_sma:var(--basics-S) var(--basics-SA);
--\_mda:var(--basics-M) var(--basics-MA);
--\_lga:var(--basics-L) var(--basics-LA);
--\_xla:var(--basics-XL) var(--basics-XLA);
--\_rA:var(--\_xla,var(--\_lga,var(--\_mda,var(--\_sma,var(--basics-A,stretch)))));
align-items:var(--\_rA);
--\_smj:var(--basics-S) var(--basics-SJ);
--\_mdj:var(--basics-M) var(--basics-MJ);
--\_lgj:var(--basics-L) var(--basics-LJ);
--\_xlj:var(--basics-XL) var(--basics-XLJ);
--\_rJ:var(--\_xlj,var(--\_lgj,var(--\_mdj,var(--\_smj,var(--basics-J,flex-start)))));
justify-content:var(--\_rJ);
--\_smd:var(--basics-S) var(--basics-SD);
--\_mdd:var(--basics-M) var(--basics-MD);
--\_lgd:var(--basics-L) var(--basics-LD);
--\_xld:var(--basics-XL) var(--basics-XLD);
--\_rD:var(--\_xld,var(--\_lgd,var(--\_mdd,var(--\_smd,var(--basics-D,column)))));
flex-direction:var(--\_rD);
--x:var(--\_xld,var(--\_lgd,var(--\_mdd,var(--\_smd,var(--basics-D,1)))));
--left-margin:calc(var(--x) 1 _ var(--\_fG));
--top-margin:calc(var(--x, 0) _ var(--\_fG));
--\_smg:var(--basics-S) var(--basics-SG);
--\_mdg:var(--basics-M) var(--basics-MG);
--\_lgg:var(--basics-L) var(--basics-LG);
--\_xlg:var(--basics-XL) var(--basics-XLG);
--\_rG:var(--\_xlg,var(--\_lgg,var(--\_mdg,var(--\_smg))));
--\_fG:calc(var(--basics-gap) _ var(--\_rG, var(--basics-G, 0)));
--wrap-gap:var(--basics-W) var(--\_fG)
}
[basics-stack]>_+_ {
margin-left:var(--wrap-gap,var(--left-margin))!important;
margin-top:var(--wrap-gap,var(--top-margin))!important
}
[basics-stack]>_+[basics-stack] {
--parent-left-margin:calc(var(--basics-pD) 1 _ var(--basics-pG));
--parent-top-margin:calc(var(--basics-pD, 0) _ var(--basics-pG));
margin-left:var(--wrap-gap,var(--parent-left-margin))!important;
margin-top:var(--wrap-gap,var(--parent-top-margin))!important
}
[basics-stack] [basics-stack] {
--basics-D:initial;
--basics-pD:initial;
--basics-SD:initial;
--basics-MD:initial;
--basics-LD:initial;
--basics-XLD:initial;
--basics-G:initial;
--basics-pG:initial;
--basics-SG:initial;
--basics-MG:initial;
--basics-LG:initial;
--basics-XLG:initial;
--basics-A:initial;
--basics-SA:initial;
--basics-MA:initial;
--basics-LA:initial;
--basics-XLA:initial;
--basics-J:initial;
--basics-SJ:initial;
--basics-MJ:initial;
--basics-LJ:initial;
--basics-XLJ:initial
}
[basics-stack]>:first-child {
margin-left:var(--basics--wrap) var(--\_fG);
margin-top:var(--basics--wrap) var(--\_fG)
}
[basics-spacer] {
display:block;
width:1px;
height:1px;
min-width:1px;
min-height:1px;
-webkit-user-select:none;
-moz-user-select:none;
user-select:none;
pointer-events:none
}
[basics-spacer][basics-spacer] {
margin-left:calc(var(--basics-gap) _ var(--basics-x, 1) - 1px);
margin-top:calc(var(--basics-gap) _ var(--basics-y, 1) - 1px)
}
[basics-spacer][basics-variant~=inline] {
display:inline-block;
margin-top:0
}
[basics-spacer][basics-variant~=expand] {
flex:1 1
}
[basics-spacer][basics-variant~=padding] {
margin:0;
padding-left:calc(var(--basics-gap) _ var(--basics-x, 1) - 1px);
padding-top:calc(var(--basics-gap) _ var(--basics-y, 1) - 1px)
}
[basics-skeleton] {
display:block;
width:-moz-fit-content;
width:fit-content;
height:auto
}
[basics-skeleton]>_ {
visibility:hidden
}
[basics-list] {
padding:0;
margin:0;
list-style-type:none
}
[basics-css-icon] {
--mask:var(--ON);
--icon:var(--mask,var(--icon));
display:inline-block;
-webkit-mask:var(--mask,invalid) var(--icon);
mask:var(--mask,invalid) var(--icon);
-webkit-mask-repeat:no-repeat;
mask-repeat:no-repeat;
-webkit-mask-size:100% 100%;
mask-size:100% 100%;
background-color:var(--mask,invalid) currentColor;
background-repeat:no-repeat;
background-size:100% 100%
}
:root {
--page-width:1072px;
--content-width:640px;
--page-left:auto;
--page-top:128px;
--header-height:48px;
--footer-height:48px;
--icon-primary:var(--mono11);
--icon-secondary:transparent;
--body-margin-left:max(24px,env(safe-area-inset-left));
--body-margin-right:max(24px,env(safe-area-inset-right));
--layer-above-sticky:20;
--layer-header:10;
--layer-sticky:10
}
@media (max-width:1024px) {
:root {
--page-top:128px
}
}
@media (max-width:768px) {
:root {
--page-top:64px
}
}
html {
scroll-padding-top:calc(var(--header-height) + var(--gap-2x));
font-size:16px
}
body,
html {
height:100%;
font-family:var(--font-sans);
background:var(--bg);
color:var(--fg)
}
body {
margin:0;
overflow-x:hidden;
overflow-y:scroll
}
#\_\_next {
min-height:100%;
padding-left:var(--body-margin-left);
padding-right:var(--body-margin-right);
padding-bottom:env(safe-area-inset-bottom);
}
.main-grid {
display:grid;
grid-template-columns:192px var(--content-width) 192px;
grid-column-gap:24px;
-moz-column-gap:24px;
column-gap:24px;
align-items:flex-start
}
.main-grid>_ {
grid-column:2;
}
@media (max-width:1024px) {
.main-grid {
grid-template-columns:auto var(--content-width) auto;
-moz-column-gap:16px;
column-gap:16px
}
}
@media (max-width:768px) {
.main-grid {
display:flex;
flex-direction:column;
align-items:unset;
justify-content:flex-start
}
}
main {
min-height:calc(100vh - var(--footer-height));
position:relative;
padding:var(--page-top) 0;
margin:0 auto;
max-width:var(--page-width)
}
@media (max-width:768px) {
main {
max-width:var(--content-width)
}
}
.blur {
position:relative;
-webkit-user-select:none;
-moz-user-select:none;
user-select:none;
pointer-events:none;
--h:min(96px,var(--page-top));
position:sticky;
width:calc(100% + var(--body-margin-left) + var(--body-margin-right));
margin-left:calc(-1 _ var(--body-margin-left));
height:var(--h);
z-index:1;
-webkit-backdrop-filter:blur(5px);
backdrop-filter:blur(5px);
opacity:.95;
-webkit-mask-image:linear-gradient(var(--direction),var(--mask-visible) 25%,var(--mask-hidden));
mask-image:linear-gradient(var(--direction),var(--mask-visible) 25%,var(--mask-hidden))
}
.blur:after {
content:"";
position:absolute;
inset:0;
background:linear-gradient(var(--direction),var(--bg),var(--transparent))
}
.blur:first-child {
margin-bottom:calc(-1 _ var(--h));
top:0;
--direction:to bottom
}
.blur:last-child {
margin-top:calc(-1 _ var(--h));
bottom:0;
--direction:to top
}
footer {
border-top:1px solid var(--mono5);
position:relative;
height:var(--footer-height);
width:calc(100% + var(--body-margin-right) + var(--body-margin-left));
left:calc(-1 _ var(--body-margin-left));
background:var(--bg);
z-index:var(--layer-header);
padding:0 var(--body-margin-left)
}
footer>div {
max-width:var(--content-width);
margin:0 auto;
display:flex;
align-items:center;
height:100%;
white-space:nowrap
}
footer>div>:first-child {
margin-right:auto
}
.subfooter {
position:relative;
width:calc(100% + var(--body-margin-right) + var(--body-margin-left));
left:calc(-1 _ var(--body-margin-left));
border-top:1px solid var(--mono5);
padding:0 var(--body-margin-left)
}
.subfooter section {
max-width:var(--content-width);
margin:0 auto;
padding:var(--gap-8x) 0
}
article[basics-prose] {
position:relative;
}
.meta {
position:sticky;
top:var(--page-top);
white-space:nowrap;
z-index:1;
grid-column:1
}
@media (max-width:768px) {
.meta {
position:relative;
top:0;
width:100%;
margin:0 0 42px
}
}
@media (max-width:1024px) {
[basics-sidenote]:not(.meta) {
margin:var(--gap-2x) 0;
margin-left:var(--gap-2x);
width:calc(100% - var(--gap-2x))
}
}
.email:before {
content:"p@paco.me"
}
[data-animation-controller=false] [data-animate] {
animation:none
}
[data-animate] {
--stagger:0;
--delay:120ms;
--start:0ms
}
@media (prefers-reduced-motion:no-preference) {
[data-animate] {
animation:enter .6s both;
animation-delay:calc(var(--stagger) _ var(--delay) + var(--start))
}
}
@keyframes enter {
0% {
opacity:0;
transform:translateY(10px)
}
to {
opacity:1;
transform:none
}
}
.stack {
display:flex
}
.stack>_+_ {
margin-left:32px
}
.column {
width:192px
}
.column>div {
margin-top:12px
}
:is(.column>div)>_+_ {
margin-top:24px
}
.css-sibling-example {
border-radius:var(--radius);
justify-content:center;
padding:var(--gap)
}
.css-sibling-example,
.css-sibling-example .container {
display:flex;
aling-items:center
}
.css-sibling-example input {
height:2.5rem;
font-size:1rem;
border-radius:0 var(--radius) var(--radius) 0;
background:var(--bg);
color:var(--fg);
border:1px solid var(--mono5);
padding:0 var(--gap-s);
outline:none;
transition:border-color var(--transition);
display:flex;
align-items:center;
justify-content:center;
margin:0
}
.css-sibling-example input:focus {
border-color:var(--mono11)
}
.css-sibling-example .prefix {
background:var(--mono3);
border-radius:var(--radius) 0 0 var(--radius);
padding:0 var(--gap-s);
height:2.5rem;
font-size:1rem;
line-height:normal;
display:flex;
align-items:center;
justify-content:center;
border:1px solid var(--mono5);
border-right:0;
-webkit-user-select:none;
-moz-user-select:none;
user-select:none;
color:var(--mono11);
transition:color var(--transition);
margin:0
}
.css-sibling-example .container.fixed input {
order:1
}
:focus:is(.css-sibling-example .container.fixed input)+.prefix {
color:var(--fg);
border-color:var(--mono11)
}
.css-sibling-example .container.fixed .prefix {
order:0
}
.custom-underlines-example {
background:var(--mono1);
width:100%;
height:100px;
display:flex;
align-items:center;
justify-content:center;
border-radius:var(--radius);
font-size:1.25rem;
color:var(--fg);
text-align:center
}
.custom-underlines-example span {
background-image:linear-gradient(var(--mono9),var(--mono9));
background-size:100% 1px;
background-position:0 100%;
background-repeat:no-repeat
}
.custom-underlines-example[data-example~="2"] span {
background-position:left 1.05em
}
.custom-underlines-example[data-example~="3"] span {
text-shadow:.1em 0 var(--mono1),-.1em 0 var(--mono1)
}
.custom-underlines-example[data-example~="4"] span {
background-size:100% .25em
}
.custom-underlines-example[data-example~="5"] span {
background:repeating-linear-gradient(to right,var(--mono9) 0,var(--mono9) 50%,transparent 50%,transparent 100%);
background-repeat:repeat-x;
background-size:1ch 1px;
background-position:0 100%
}
.custom-underlines-example[data-example~="6"] span {
background-size:2ch 1px
}
[basics-css-icon] {
--size:1.125em;
height:var(--size);
width:var(--size);
vertical-align:text-top
}
[data-icon=arrow-left-right] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 12a.86.86 0 0 0 .307.658l6.138 6.064a.899.899 0 0 0 .657.278c.273 0 .49-.083.65-.248a.885.885 0 0 0 .242-.643.864.864 0 0 0-.066-.344.7.7 0 0 0-.183-.256L5.91 14.747 3.733 12.79l2.616.102h11.618l2.615-.102-2.177 1.958-2.835 2.762a.702.702 0 0 0-.183.256.864.864 0 0 0-.066.343c0 .264.08.478.242.644.16.165.377.248.65.248a.9.9 0 0 0 .658-.278l6.137-6.064a.859.859 0 0 0 .227-1.016 1.137 1.137 0 0 0-.227-.314l-6.137-6.05A.9.9 0 0 0 16.213 5c-.273 0-.49.083-.65.248a.885.885 0 0 0-.242.643c0 .127.022.242.066.344a.702.702 0 0 0 .183.256l2.835 2.776 2.177 1.93-2.615-.088H6.349l-2.616.087L5.91 9.267l2.835-2.776a.7.7 0 0 0 .183-.256.864.864 0 0 0 .066-.344.884.884 0 0 0-.241-.643C8.592 5.083 8.375 5 8.103 5a.899.899 0 0 0-.658.278l-6.138 6.05a1.14 1.14 0 0 0-.227.314A.819.819 0 0 0 1 12Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=house] {
--mask:var(--OFF);
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6641 4.1094C12.6564 3.4376 11.3436 3.4376 10.3359 4.1094L4.3359 8.1094C3.5013 8.6658 3 9.60249 3 10.6056V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10.6056C21 9.60249 20.4987 8.6658 19.6641 8.1094L13.6641 4.1094Z' fill='%23D7EAFF' stroke='%23007AFF' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M10 21C9.44772 21 9 20.5523 9 20L9 15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V20C15 20.5523 14.5523 21 14 21H10Z' fill='white' stroke='%23007AFF' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A")
}
[data-icon=approved] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.199 18.873h1.72c.158 0 .29.055.395.166l1.22 1.212c.502.502.99.752 1.466.749.475-.003.961-.252 1.458-.749l1.22-1.212a.55.55 0 0 1 .404-.166h1.711c.708 0 1.23-.168 1.569-.503.338-.336.507-.86.507-1.573v-1.711a.55.55 0 0 1 .166-.404l1.212-1.22c.502-.497.752-.983.749-1.458-.003-.475-.252-.964-.749-1.466l-1.212-1.22a.54.54 0 0 1-.166-.396v-1.72c0-.702-.168-1.223-.503-1.564-.336-.34-.86-.51-1.573-.51h-1.711a.564.564 0 0 1-.404-.16l-1.22-1.211C12.96 3.25 12.475 2.997 12 3c-.475.003-.964.255-1.466.757l-1.22 1.212a.537.537 0 0 1-.396.158h-1.72c-.707 0-1.23.168-1.568.503-.338.336-.507.86-.507 1.573v1.72a.555.555 0 0 1-.158.395l-1.212 1.22c-.502.502-.753.99-.753 1.466 0 .475.25.961.753 1.458l1.212 1.22c.105.11.158.245.158.404v1.711c0 .708.17 1.23.507 1.569.338.338.861.507 1.569.507Zm3.914-3.003a.79.79 0 0 1-.373-.087 1.028 1.028 0 0 1-.325-.293l-1.988-2.44a1.108 1.108 0 0 1-.139-.25.719.719 0 0 1-.051-.265c0-.18.06-.334.182-.464a.594.594 0 0 1 .452-.194c.116 0 .22.024.313.071a.919.919 0 0 1 .289.27l1.608 2.076 3.383-5.435c.148-.243.338-.365.57-.365.17 0 .322.054.46.163a.53.53 0 0 1 .206.44c0 .09-.021.179-.064.269-.042.09-.087.174-.134.253l-3.724 5.87a.885.885 0 0 1-.293.286.737.737 0 0 1-.372.095Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=sparkles] {
--icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 25 26'%3E%3Cpath fill='%23000' d='M14.314 25.03c.135 0 .25-.044.346-.132a.585.585 0 0 0 .18-.342c.147-1.17.315-2.153.502-2.95.187-.797.436-1.454.745-1.97.31-.515.72-.929 1.229-1.239.509-.31 1.156-.554 1.942-.732.786-.177 1.756-.33 2.91-.46a.578.578 0 0 0 .366-.173.486.486 0 0 0 .142-.349.5.5 0 0 0-.142-.36.568.568 0 0 0-.366-.17c-1.154-.13-2.124-.285-2.91-.461-.786-.177-1.433-.42-1.942-.731a3.59 3.59 0 0 1-1.229-1.24c-.31-.517-.558-1.174-.745-1.97-.188-.797-.355-1.777-.503-2.94a.588.588 0 0 0-.179-.352.496.496 0 0 0-.346-.131.49.49 0 0 0-.353.13.603.603 0 0 0-.173.353 31.016 31.016 0 0 1-.514 2.94c-.187.796-.435 1.453-.744 1.97-.309.516-.718.93-1.228 1.24-.51.31-1.158.554-1.944.73-.786.177-1.756.331-2.91.462a.545.545 0 0 0-.36.17.511.511 0 0 0-.137.36c0 .134.046.25.137.35a.555.555 0 0 0 .36.172c1.152.152 2.12.322 2.9.51.782.186 1.427.433 1.935.738.509.305.918.71 1.226 1.218.31.506.558 1.155.747 1.945.189.79.366 1.77.532 2.94a.6.6 0 0 0 .173.342c.092.088.21.132.353.132ZM7.112 13.283c.207 0 .324-.107.35-.322.095-.707.191-1.258.29-1.654.099-.396.253-.695.462-.896.21-.201.522-.357.939-.469.416-.111.99-.24 1.72-.384.217-.04.325-.157.325-.35 0-.215-.108-.334-.325-.358a21.418 21.418 0 0 1-1.726-.313c-.42-.1-.733-.254-.939-.462-.205-.208-.357-.516-.456-.923a17.047 17.047 0 0 1-.29-1.694c-.026-.224-.143-.336-.35-.336-.215 0-.335.116-.36.348-.088.705-.181 1.255-.279 1.651-.098.397-.253.693-.465.89-.213.198-.53.353-.95.465-.421.112-.994.237-1.719.374-.216.039-.324.159-.324.358 0 .2.123.317.37.35a23.49 23.49 0 0 1 1.695.34c.414.103.725.257.933.462.209.205.362.51.46.913.098.404.19.959.278 1.665.026.23.146.345.361.345Zm5.126-7.309c.137 0 .217-.068.241-.205.109-.579.207-.997.296-1.256a.888.888 0 0 1 .525-.55c.262-.108.7-.218 1.312-.328.145-.033.217-.113.217-.241 0-.13-.072-.21-.217-.242-.613-.11-1.05-.219-1.312-.327a.888.888 0 0 1-.525-.556c-.089-.262-.188-.679-.296-1.25-.024-.144-.104-.217-.241-.217-.128 0-.204.073-.228.217-.109.571-.207.988-.296 1.25a.888.888 0 0 1-.526.556c-.261.108-.7.218-1.314.327-.143.032-.214.112-.214.242 0 .128.071.208.214.241.615.11 1.053.22 1.314.328a.888.888 0 0 1 .526.55c.089.259.187.677.296 1.256.024.137.1.205.228.205Z'/%3E%3C/svg%3E")
}
[data-icon=search] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 10.876c0 .948.18 1.837.54 2.667a7.013 7.013 0 0 0 3.71 3.675 6.812 6.812 0 0 0 2.693.534c.754 0 1.473-.115 2.157-.345a7.203 7.203 0 0 0 1.88-.948l4.28 4.248c.104.098.219.17.344.22.124.049.256.073.395.073.198 0 .372-.044.522-.134a.934.934 0 0 0 .353-.366c.084-.155.126-.327.126-.517 0-.138-.025-.267-.074-.387a.95.95 0 0 0-.213-.32l-4.255-4.239a6.87 6.87 0 0 0 1.049-1.92 6.61 6.61 0 0 0 .378-2.241c0-.948-.18-1.837-.54-2.667a7.015 7.015 0 0 0-3.71-3.675A6.813 6.813 0 0 0 9.943 4c-.957 0-1.855.178-2.693.534A7.015 7.015 0 0 0 3.54 8.21C3.18 9.04 3 9.928 3 10.876Zm1.488 0c0-.747.14-1.446.422-2.098a5.489 5.489 0 0 1 2.915-2.886 5.38 5.38 0 0 1 2.118-.419c.754 0 1.46.14 2.118.418a5.438 5.438 0 0 1 1.736 1.163c.499.497.89 1.072 1.174 1.724.284.652.427 1.351.427 2.098 0 .747-.143 1.446-.427 2.098a5.476 5.476 0 0 1-1.174 1.719 5.534 5.534 0 0 1-1.736 1.163 5.332 5.332 0 0 1-2.118.422c-.754 0-1.46-.14-2.119-.422a5.587 5.587 0 0 1-1.74-1.163 5.381 5.381 0 0 1-1.174-1.72 5.239 5.239 0 0 1-.422-2.097Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=arrowLeftStop] {
--icon:url("data:image/svg+xml,%3Csvg width='79' height='58' viewBox='0 0 79 58' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.17289 57.7734C4.01922 57.7734 4.72722 57.4968 5.29689 56.9434C5.86655 56.39 6.15139 55.6901 6.15139 54.8438V3.18361C6.15139 2.33728 5.86655 1.63741 5.29689 1.08401C4.72722 0.530607 4.01922 0.253906 3.17289 0.253906C2.26142 0.253906 1.52899 0.530607 0.975588 1.08401C0.422201 1.63741 0.145508 2.33728 0.145508 3.18361V54.8438C0.145508 55.6901 0.422201 56.39 0.975588 56.9434C1.52899 57.4968 2.26142 57.7734 3.17289 57.7734ZM34.9111 57.7734C35.725 57.7734 36.4167 57.4968 36.9863 56.9434C37.556 56.39 37.8408 55.6901 37.8408 54.8438C37.8408 54.4531 37.7676 54.0706 37.6211 53.6963C37.4746 53.322 37.2712 53.0046 37.0108 52.7441L27.001 42.5879L13.085 29.8438L12.4502 31.6504L23.3389 31.9434H75.1944C76.0407 31.9434 76.7406 31.6667 77.294 31.1133C77.8473 30.5599 78.124 29.86 78.124 29.0137C78.124 28.1348 77.8473 27.4105 77.294 26.8408C76.7406 26.2711 76.0407 25.9863 75.1944 25.9863H23.3389L12.4502 26.377L13.085 28.1836L27.001 15.4395L37.0108 5.23441C37.2712 4.97401 37.4746 4.65661 37.6211 4.28221C37.7676 3.90787 37.8408 3.50911 37.8408 3.08591C37.8408 2.27211 37.556 1.59668 36.9863 1.05961C36.4167 0.522475 35.725 0.253906 34.9111 0.253906C34.0973 0.253906 33.3649 0.56314 32.7139 1.18161L7.12789 26.7676C6.44435 27.4186 6.10259 28.1673 6.10259 29.0137C6.10259 29.8275 6.44435 30.5599 7.12789 31.2109L32.7139 56.8457C33.3649 57.4642 34.0973 57.7734 34.9111 57.7734Z' fill='black'/%3E%3C/svg%3E%0A")
}
[data-icon=arrowUpLeft] {
--icon:url("data:image/svg+xml,%3Csvg width='57' height='57' viewBox='0 0 57 57' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.0356445 42.8086C0.0356445 43.72 0.336737 44.4769 0.938924 45.0791C1.54119 45.6813 2.26549 45.9824 3.11182 45.9824C3.92562 45.9824 4.62549 45.6731 5.21142 45.0547C5.79736 44.4362 6.09032 43.7363 6.09032 42.9551V26.5977L5.55322 9.80078L11.7055 16.7344L51.0122 55.9922C51.6307 56.6107 52.3306 56.9199 53.1118 56.9199C53.9256 56.9199 54.6499 56.6025 55.2846 55.9677C55.9194 55.333 56.2368 54.5924 56.2368 53.7461C56.2368 52.9648 55.9276 52.2812 55.3091 51.6953L16.0512 12.3887L9.16652 6.23628L27.2817 6.72458H42.272C43.0858 6.72458 43.7938 6.43974 44.396 5.87008C44.9982 5.30041 45.2993 4.60868 45.2993 3.79488C45.2993 2.98108 45.0064 2.27308 44.4204 1.67088C43.8345 1.06868 43.0858 0.767578 42.1743 0.767578H3.30712C2.33059 0.767578 1.54936 1.06868 0.963425 1.67088C0.377458 2.27308 0.0844746 3.04618 0.0844746 3.99018L0.0356445 42.8086Z' fill='black'/%3E%3C/svg%3E%0A")
}
[data-icon=repeat] {
--icon:url("data:image/svg+xml,%3Csvg width='81' height='68' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.174 35.016c.846 0 1.546-.285 2.1-.855.553-.57.83-1.278.83-2.124v-3.564c0-3.45 1.041-6.169 3.124-8.155 2.084-1.985 4.948-2.978 8.594-2.978h29.102v9.033c0 .716.195 1.261.586 1.636.39.374.944.561 1.66.561.358 0 .692-.057 1-.17.31-.114.595-.285.855-.513l14.356-11.67c.586-.521.887-1.123.903-1.807.016-.683-.285-1.27-.903-1.758L51.025.934a2.377 2.377 0 0 0-.854-.489A3.307 3.307 0 0 0 49.17.3c-.716 0-1.27.187-1.66.561-.39.375-.586.904-.586 1.587v9.131H18.31c-5.47 0-9.856 1.465-13.16 4.395C1.847 18.903.195 22.939.195 28.082v3.955c0 .846.277 1.555.83 2.124.554.57 1.27.855 2.149.855ZM77.1 32.623c-.847 0-1.555.277-2.124.83-.57.553-.855 1.253-.855 2.1v3.613c0 3.418-1.042 6.128-3.125 8.13-2.083 2.002-4.931 3.003-8.545 3.003H33.35v-8.984c0-.717-.204-1.262-.61-1.636-.408-.375-.97-.562-1.685-.562-.326 0-.643.05-.952.147-.31.097-.61.276-.904.537L14.844 51.47c-.586.488-.88 1.074-.88 1.758 0 .683.294 1.285.88 1.806l14.355 11.719c.293.228.594.39.904.488.309.098.626.147.952.147.716 0 1.277-.188 1.684-.562.407-.374.61-.92.61-1.636v-9.18h28.614c5.469 0 9.855-1.456 13.16-4.37 3.303-2.913 4.955-6.957 4.955-12.133v-3.955c0-.847-.285-1.546-.854-2.1-.57-.553-1.278-.83-2.124-.83Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=pause] {
--icon:url("data:image/svg+xml,%3Csvg width='46' height='63' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.29 62.557h8.544c3.19 0 4.785-1.612 4.785-4.834V5.769c0-3.19-1.595-4.785-4.785-4.785H5.289C2.066.984.455 2.58.455 5.77v51.954c0 3.222 1.611 4.834 4.834 4.834Zm27.148 0h8.593c3.19 0 4.785-1.612 4.785-4.834V5.769c0-3.19-1.595-4.785-4.785-4.785h-8.593c-3.223 0-4.834 1.595-4.834 4.785v51.954c0 3.222 1.61 4.834 4.834 4.834Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=play] {
--icon:url("data:image/svg+xml,%3Csvg width='59' height='66' viewBox='0 0 59 66' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.11331 65.0703C5.79691 65.0703 6.45608 64.9483 7.09081 64.7041C7.72561 64.46 8.40108 64.1263 9.11721 63.7032L54.2832 37.4824C55.7155 36.6686 56.7246 35.9199 57.3105 35.2363C57.8964 34.5527 58.1894 33.7389 58.1894 32.7949C58.1894 31.8509 57.8964 31.0371 57.3105 30.3535C56.7246 29.6699 55.7155 28.9212 54.2832 28.1074L9.11721 1.88673C8.40108 1.4636 7.72561 1.12993 7.09081 0.885727C6.45608 0.641594 5.79691 0.519531 5.11331 0.519531C3.81118 0.519531 2.77765 0.983399 2.01271 1.91113C1.24773 2.83887 0.865234 4.06773 0.865234 5.59773V59.9922C0.865234 61.5222 1.24773 62.751 2.01271 63.6787C2.77765 64.6065 3.81118 65.0703 5.11331 65.0703Z' fill='black'/%3E%3C/svg%3E%0A")
}
[data-icon=close-fullscreen] {
--icon:url("data:image/svg+xml,%3Csvg width='76' height='77' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.154 33.791h22.022c1.725 0 3.06-.472 4.004-1.416.944-.944 1.416-2.262 1.416-3.955V6.398c0-.879-.285-1.619-.855-2.221-.57-.603-1.31-.904-2.221-.904-.88 0-1.612.293-2.198.88-.586.585-.879 1.334-.879 2.245v4.786l.733 13.134-10.84-11.279L6.276.881C5.688.295 4.956.002 4.077.002c-.944 0-1.725.285-2.344.854-.618.57-.927 1.327-.927 2.271 0 .456.081.879.244 1.27.163.39.39.748.683 1.074l12.159 12.11 11.279 10.79-13.184-.683H7.154c-.879 0-1.627.276-2.246.83-.618.553-.927 1.285-.927 2.197 0 .911.309 1.652.927 2.222.619.57 1.367.854 2.246.854Zm37.207 39.355c.88 0 1.604-.3 2.173-.903.57-.602.855-1.343.855-2.222v-5.517l-.684-13.135 10.84 11.28 12.5 12.597c.553.586 1.27.879 2.148.879.944 0 1.726-.285 2.344-.855.619-.57.928-1.326.928-2.27 0-.456-.073-.879-.22-1.27a2.846 2.846 0 0 0-.66-1.025L61.989 58.107l-11.23-10.79 13.135.732h5.517c.88 0 1.62-.285 2.222-.855.602-.57.903-1.31.903-2.221 0-.88-.301-1.612-.903-2.198-.602-.586-1.343-.878-2.222-.878H46.656c-1.692 0-3.019.48-3.98 1.44-.96.96-1.44 2.287-1.44 3.98V70.02c0 .88.293 1.62.88 2.222.585.602 1.334.903 2.245.903Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=fullscreen] {
--icon:url("data:image/svg+xml,%3Csvg width='74' height='74' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.932 30.984c.911 0 1.652-.293 2.221-.879.57-.585.855-1.334.855-2.246v-4.834L6.324 9.94l10.84 11.23 12.06 12.208c.554.586 1.27.879 2.149.879.944 0 1.725-.285 2.344-.855.618-.57.928-1.342.928-2.319 0-.423-.082-.83-.245-1.22a3.144 3.144 0 0 0-.683-1.026L21.559 16.678l-11.23-10.84 13.183.732h4.785c.879 0 1.627-.285 2.246-.854.619-.57.928-1.294.928-2.173 0-.912-.31-1.66-.928-2.246-.619-.586-1.367-.879-2.246-.879H6.275c-1.725 0-3.06.48-4.004 1.44-.944.96-1.416 2.287-1.416 3.98v22.021c0 .88.285 1.62.855 2.222.57.602 1.31.903 2.222.903Zm42.04 42.09h22.022c1.693 0 3.02-.472 3.98-1.416s1.44-2.279 1.44-4.004V45.633c0-.88-.285-1.611-.854-2.198-.57-.586-1.31-.878-2.222-.878-.879 0-1.611.284-2.197.854-.586.57-.88 1.31-.88 2.222v4.834l.733 13.135-10.84-11.28-12.11-12.158a2.846 2.846 0 0 0-2.148-.928c-.944 0-1.725.293-2.343.88-.619.585-.928 1.35-.928 2.294 0 .423.073.838.22 1.245.146.407.382.757.708 1.05l12.11 12.158L63.94 67.654l-13.134-.732h-4.834c-.88 0-1.62.285-2.222.854-.602.57-.92 1.31-.952 2.222 0 .879.3 1.611.903 2.197.602.586 1.36.88 2.27.88Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=speak-zzz] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.168 18.308a.762.762 0 0 0 .57-.224.787.787 0 0 0 .218-.575V5.837a.856.856 0 0 0-.219-.594.742.742 0 0 0-.579-.243.854.854 0 0 0-.448.117c-.13.078-.285.198-.467.36l-3.28 3.115a.29.29 0 0 1-.215.078h-2.23c-.48 0-.853.135-1.119.404-.266.27-.399.66-.399 1.173V13.1c0 .506.133.895.4 1.168.265.272.638.409 1.119.409h2.229c.084 0 .156.026.214.078l3.28 3.115c.163.155.317.267.463.336.146.068.3.102.463.102Zm9.452-8.402H18.8v-.048l1.86-2.434c.142-.182.214-.331.214-.448a.324.324 0 0 0-.127-.272.48.48 0 0 0-.302-.098h-2.473a.403.403 0 0 0-.282.098.35.35 0 0 0-.107.272c0 .117.036.21.107.278a.392.392 0 0 0 .282.102h1.714v.039l-1.87 2.424a1.15 1.15 0 0 0-.16.248.55.55 0 0 0-.044.22c0 .11.038.199.112.267a.423.423 0 0 0 .297.102h2.6c.11 0 .2-.034.272-.102a.365.365 0 0 0 .107-.278c0-.11-.036-.2-.107-.267a.378.378 0 0 0-.273-.103Zm-4.341 2.99h-1.324v-.03l1.362-1.772c.137-.175.205-.318.205-.428 0-.117-.039-.206-.117-.268a.455.455 0 0 0-.292-.092h-1.918a.359.359 0 0 0-.258.097.334.334 0 0 0-.102.253c0 .117.034.208.102.273a.359.359 0 0 0 .258.097h1.207v.03l-1.353 1.771c-.13.169-.194.315-.194.438 0 .104.035.188.107.253a.404.404 0 0 0 .282.098h2.035c.11 0 .2-.031.267-.093a.33.33 0 0 0 .102-.258c0-.11-.034-.2-.102-.268a.362.362 0 0 0-.267-.102Zm3.387 2.725h-1.12v-.03l1.14-1.508c.071-.098.123-.175.156-.234a.376.376 0 0 0 .048-.185.302.302 0 0 0-.112-.253.436.436 0 0 0-.277-.088h-1.675a.35.35 0 0 0-.243.088c-.065.059-.097.143-.097.253 0 .22.113.331.34.331h.984v.04l-1.12 1.498c-.065.091-.113.167-.146.23a.422.422 0 0 0-.049.199c0 .104.036.186.107.248a.403.403 0 0 0 .273.092h1.791a.34.34 0 0 0 .244-.092.339.339 0 0 0 .097-.258.314.314 0 0 0-.097-.239.34.34 0 0 0-.244-.092Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=speak-3] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.745 19.248c.25 0 .453-.08.61-.24a.843.843 0 0 0 .234-.615V5.896a.916.916 0 0 0-.235-.635.794.794 0 0 0-.62-.261c-.18 0-.34.042-.48.125a3.491 3.491 0 0 0-.5.386L7.242 8.846a.31.31 0 0 1-.23.083H4.627c-.514 0-.914.145-1.199.433-.285.288-.427.707-.427 1.256v3.054c0 .542.142.959.427 1.25.285.292.685.438 1.199.438h2.387c.09 0 .167.028.229.084l3.513 3.335c.173.167.338.286.495.36.156.072.32.109.495.109Zm3.835-3.669c.125.083.262.111.412.083a.57.57 0 0 0 .37-.25c.313-.41.56-.903.74-1.48a6.03 6.03 0 0 0 .27-1.813 5.98 5.98 0 0 0-.27-1.809 4.914 4.914 0 0 0-.74-1.485.57.57 0 0 0-.37-.25.516.516 0 0 0-.412.094.571.571 0 0 0-.24.39.632.632 0 0 0 .136.464c.25.348.443.744.578 1.189.136.444.204.913.204 1.407 0 .493-.068.96-.204 1.402a4.184 4.184 0 0 1-.578 1.193.64.64 0 0 0-.136.469c.021.16.101.292.24.396Zm2.95 2.126a.51.51 0 0 0 .422.1.592.592 0 0 0 .37-.256c.521-.702.931-1.529 1.23-2.48a9.79 9.79 0 0 0 .448-2.95 9.898 9.898 0 0 0-.443-2.95c-.295-.952-.707-1.779-1.235-2.48a.592.592 0 0 0-.37-.256.51.51 0 0 0-.422.1.462.462 0 0 0-.224.354.668.668 0 0 0 .13.458c.459.64.815 1.372 1.068 2.2a8.73 8.73 0 0 1 .38 2.574 8.57 8.57 0 0 1-.385 2.569 7.958 7.958 0 0 1-1.063 2.204.669.669 0 0 0-.13.459.462.462 0 0 0 .224.354Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=waveform] {
--icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M3.414 14.273c.235 0 .432-.08.592-.239.16-.16.24-.353.24-.581v-3.091a.81.81 0 0 0-.24-.587.795.795 0 0 0-.592-.245.764.764 0 0 0-.577.245.821.821 0 0 0-.233.587v3.09c0 .229.078.423.233.582.155.16.347.24.577.24Zm3.436 4.182a.796.796 0 0 0 .593-.244.81.81 0 0 0 .238-.588V6.191c0-.23-.08-.427-.238-.593a.787.787 0 0 0-.593-.249.771.771 0 0 0-.587.249.837.837 0 0 0-.234.593v11.432c0 .23.078.426.234.588a.78.78 0 0 0 .587.244Zm3.428 4.112a.793.793 0 0 0 .59-.244.81.81 0 0 0 .239-.588V2.08a.81.81 0 0 0-.239-.588.793.793 0 0 0-.59-.243.766.766 0 0 0-.578.243.82.82 0 0 0-.232.588v19.656c0 .23.077.426.232.588a.766.766 0 0 0 .578.244Zm3.436-5.357c.235 0 .43-.079.586-.238a.8.8 0 0 0 .234-.582V7.425a.818.818 0 0 0-.234-.588.78.78 0 0 0-.586-.244.779.779 0 0 0-.588.244.82.82 0 0 0-.233.588v8.965a.802.802 0 0 0 .82.82Zm3.436 3.085a.79.79 0 0 0 .582-.24.793.793 0 0 0 .238-.58V4.34a.811.811 0 0 0-.238-.587.782.782 0 0 0-.582-.244.778.778 0 0 0-.587.244.819.819 0 0 0-.234.587v15.134a.8.8 0 0 0 .234.582c.156.16.352.239.587.239Zm3.427-5.142c.236 0 .431-.08.587-.238a.8.8 0 0 0 .234-.583v-4.85a.818.818 0 0 0-.234-.588.78.78 0 0 0-.587-.243.778.778 0 0 0-.587.243.82.82 0 0 0-.233.588v4.85a.802.802 0 0 0 .82.82Z'/%3E%3C/svg%3E")
}
[data-icon=waveform-path] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.45 13.158h2.14a.385.385 0 0 0 .373-.287l.364-1.579h-.22l1.133 5.3a.359.359 0 0 0 .148.222.433.433 0 0 0 .489 0 .32.32 0 0 0 .133-.224l.907-6.008 1.044 9.066c.014.12.06.21.138.266a.422.422 0 0 0 .256.086c.094 0 .178-.03.253-.089a.359.359 0 0 0 .127-.263l.968-10.897.97 10.889c.01.116.052.204.124.264a.39.39 0 0 0 .253.092.393.393 0 0 0 .255-.087.393.393 0 0 0 .136-.27l1.041-9.057.92 6.016a.32.32 0 0 0 .128.223.444.444 0 0 0 .49 0 .332.332 0 0 0 .142-.223l1.127-5.274-.239.006.395 1.54a.333.333 0 0 0 .137.221.42.42 0 0 0 .233.067h2.08a.438.438 0 0 0 .32-.129.42.42 0 0 0 .131-.31.437.437 0 0 0-.13-.318.433.433 0 0 0-.32-.132h-1.794l-.584-2.246c-.038-.143-.112-.236-.221-.281a.41.41 0 0 0-.327.001c-.11.046-.178.14-.207.283l-.928 4.372-1.026-6.76a.399.399 0 0 0-.142-.259.384.384 0 0 0-.249-.083.41.41 0 0 0-.25.09.347.347 0 0 0-.126.256l-.943 8.151-1.005-11.432a.363.363 0 0 0-.131-.27.413.413 0 0 0-.519 0 .365.365 0 0 0-.13.27L10.3 15.793l-.934-8.151a.385.385 0 0 0-.134-.262.396.396 0 0 0-.499-.002.391.391 0 0 0-.14.26l-1.03 6.76-.921-4.366c-.029-.135-.097-.224-.206-.269a.423.423 0 0 0-.33 0 .382.382 0 0 0-.225.269l-.574 2.237H3.45a.433.433 0 0 0-.32.132.437.437 0 0 0-.131.319c0 .12.043.224.13.31a.438.438 0 0 0 .32.128Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=asterisk] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.917 20c.216 0 .386-.064.51-.19.126-.127.188-.305.188-.532a2.49 2.49 0 0 0-.004-.13 2.366 2.366 0 0 1-.003-.124l-.088-5.987 5.093 3.044a.994.994 0 0 0 .512.145.662.662 0 0 0 .498-.201.71.71 0 0 0 .194-.515.68.68 0 0 0-.101-.385.935.935 0 0 0-.352-.283L13.068 12l5.296-2.841c.17-.088.287-.183.354-.286a.677.677 0 0 0 .1-.376.724.724 0 0 0-.193-.519.656.656 0 0 0-.5-.203.995.995 0 0 0-.512.144l-5.093 3.044.088-5.987.003-.123c.003-.044.004-.087.004-.13 0-.228-.062-.406-.187-.532-.125-.127-.295-.191-.511-.191-.219 0-.39.064-.512.19-.123.127-.184.305-.184.533 0 .043.001.086.004.13l.003.123.089 5.987L6.2 7.919a.949.949 0 0 0-.506-.144.67.67 0 0 0-.498.2A.704.704 0 0 0 5 8.49c0 .153.035.281.105.383.07.103.187.198.354.286L10.762 12l-5.303 2.842a.96.96 0 0 0-.354.285.664.664 0 0 0-.105.383c0 .21.066.38.197.515a.67.67 0 0 0 .498.2c.18 0 .349-.048.506-.144l5.116-3.044-.089 5.987-.003.123a2.49 2.49 0 0 0-.004.13c0 .228.061.405.184.532.122.127.293.191.512.191Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=merge] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.092 19.19c.7 0 1.356-.131 1.97-.394a5.128 5.128 0 0 0 2.716-2.716 4.986 4.986 0 0 0 .394-1.975c0-.704-.132-1.361-.395-1.973a5.146 5.146 0 0 0-2.715-2.716 4.955 4.955 0 0 0-1.97-.395 4.97 4.97 0 0 0-1.976.395 5.141 5.141 0 0 0-2.722 2.716A4.948 4.948 0 0 0 4 14.105c0 .7.131 1.359.394 1.975a5.062 5.062 0 0 0 1.098 1.624c.468.465 1.01.83 1.624 1.092a4.97 4.97 0 0 0 1.976.394Zm0-1.042a3.907 3.907 0 0 1-2.039-.546 4.146 4.146 0 0 1-1.463-1.465 3.903 3.903 0 0 1-.545-2.033c0-.741.182-1.418.545-2.03.364-.611.851-1.1 1.463-1.464a3.907 3.907 0 0 1 2.04-.547c.741 0 1.417.183 2.026.547.61.365 1.097.853 1.461 1.465a3.89 3.89 0 0 1 .547 2.03c0 .743-.182 1.42-.545 2.032-.364.612-.851 1.1-1.461 1.465a3.88 3.88 0 0 1-2.029.546ZM12 14.168c.7 0 1.356-.13 1.97-.393a5.101 5.101 0 0 0 1.621-1.096 5.184 5.184 0 0 0 1.098-1.623 4.936 4.936 0 0 0 .397-1.977c0-.7-.132-1.358-.397-1.972a5.146 5.146 0 0 0-2.719-2.713A4.955 4.955 0 0 0 12 4c-.703 0-1.362.131-1.976.394a5.113 5.113 0 0 0-1.62 1.093 5.176 5.176 0 0 0-1.097 1.62 4.912 4.912 0 0 0-.4 1.972c0 .704.134 1.362.4 1.977a5.214 5.214 0 0 0 1.097 1.623 5.085 5.085 0 0 0 1.62 1.096 4.97 4.97 0 0 0 1.976.394Zm0-1.041a3.91 3.91 0 0 1-2.038-.547 4.116 4.116 0 0 1-1.46-1.464 3.927 3.927 0 0 1-.543-2.037c0-.741.181-1.417.542-2.028A4.12 4.12 0 0 1 9.962 5.59 3.91 3.91 0 0 1 12 5.042a3.89 3.89 0 0 1 2.03.547 4.141 4.141 0 0 1 1.461 1.46c.363.61.544 1.287.544 2.03 0 .747-.18 1.425-.542 2.037a4.119 4.119 0 0 1-1.46 1.464 3.894 3.894 0 0 1-2.033.547Zm2.917 6.063c.703 0 1.36-.131 1.973-.394a5.161 5.161 0 0 0 1.62-1.092 5.074 5.074 0 0 0 1.096-1.624A4.986 4.986 0 0 0 20 14.105c0-.704-.131-1.361-.394-1.973a5.132 5.132 0 0 0-1.096-1.62 5.135 5.135 0 0 0-1.62-1.096 4.947 4.947 0 0 0-1.973-.395c-.7 0-1.358.132-1.973.395a5.122 5.122 0 0 0-1.623 1.096 5.132 5.132 0 0 0-1.096 1.62 4.949 4.949 0 0 0-.394 1.973c0 .7.132 1.359.394 1.975a5.074 5.074 0 0 0 1.096 1.624c.468.465 1.009.83 1.623 1.092a4.961 4.961 0 0 0 1.973.394Zm0-1.042a3.894 3.894 0 0 1-2.033-.546 4.157 4.157 0 0 1-1.464-1.465 3.894 3.894 0 0 1-.547-2.033c0-.741.182-1.418.547-2.03.364-.611.853-1.1 1.464-1.464a3.894 3.894 0 0 1 2.033-.547 3.89 3.89 0 0 1 2.03.547c.612.365 1.1.853 1.464 1.465a3.89 3.89 0 0 1 .547 2.03c0 .743-.181 1.42-.543 2.032-.363.612-.85 1.1-1.461 1.465a3.902 3.902 0 0 1-2.037.546Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=dotted-circle] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.976 19.949a.659.659 0 0 0 .482-.197.646.646 0 0 0 .199-.476.631.631 0 0 0-.2-.47.665.665 0 0 0-.48-.194.642.642 0 0 0-.465.196.633.633 0 0 0-.199.468c0 .186.066.344.197.476a.638.638 0 0 0 .466.197Zm2.266-.364a.654.654 0 0 0 .476-.194.642.642 0 0 0 .197-.476.64.64 0 0 0-.197-.47.652.652 0 0 0-.476-.196.64.64 0 0 0-.47.197.643.643 0 0 0-.196.47c0 .188.065.346.195.476.13.129.287.194.471.194Zm2.044-1.033a.65.65 0 0 0 .473-.2.653.653 0 0 0 .2-.48.634.634 0 0 0-.2-.471.655.655 0 0 0-.473-.196.656.656 0 0 0-.476.197.635.635 0 0 0-.2.47c0 .188.066.348.198.48a.651.651 0 0 0 .478.2Zm1.62-1.62a.646.646 0 0 0 .474-.2.657.657 0 0 0 .199-.48.64.64 0 0 0-.199-.467.648.648 0 0 0-.474-.2.65.65 0 0 0-.473.2.637.637 0 0 0-.2.467c0 .186.066.346.198.48.133.133.291.2.475.2Zm1.026-2.023a.648.648 0 0 0 .48-.2.652.652 0 0 0 .197-.474.65.65 0 0 0-.197-.474.65.65 0 0 0-.48-.2.641.641 0 0 0-.466.2.645.645 0 0 0-.2.474c0 .182.066.34.199.473.132.134.288.2.467.2Zm.388-2.266a.66.66 0 0 0 .48-.197c.133-.132.2-.29.2-.477a.63.63 0 0 0-.2-.467.663.663 0 0 0-.48-.196.642.642 0 0 0-.465.196.633.633 0 0 0-.199.467c0 .187.066.345.198.477a.638.638 0 0 0 .466.197Zm-.388-2.256a.65.65 0 0 0 .48-.199.65.65 0 0 0 .197-.474.652.652 0 0 0-.197-.473.648.648 0 0 0-.48-.2.637.637 0 0 0-.467.2.65.65 0 0 0-.2.473c0 .183.068.341.201.474a.641.641 0 0 0 .466.199Zm-1.026-2.024a.648.648 0 0 0 .474-.199.64.64 0 0 0 .199-.467.657.657 0 0 0-.199-.48.645.645 0 0 0-.474-.2.645.645 0 0 0-.475.2.657.657 0 0 0-.199.48c0 .179.067.335.2.467a.65.65 0 0 0 .474.2Zm-1.62-1.62c.181 0 .339-.065.473-.195.133-.13.2-.287.2-.47a.653.653 0 0 0-.2-.482.65.65 0 0 0-.473-.199.651.651 0 0 0-.478.199.656.656 0 0 0-.199.481c0 .182.067.338.2.47a.656.656 0 0 0 .477.197ZM14.242 5.7a.651.651 0 0 0 .476-.195.64.64 0 0 0 .197-.471.642.642 0 0 0-.197-.477.654.654 0 0 0-.476-.194.644.644 0 0 0-.47.194.645.645 0 0 0-.196.477c0 .181.065.338.195.47a.64.64 0 0 0 .471.196Zm-2.266-.363a.665.665 0 0 0 .482-.194.631.631 0 0 0 .199-.47.646.646 0 0 0-.2-.476.659.659 0 0 0-.48-.197.638.638 0 0 0-.466.197.648.648 0 0 0-.198.476c0 .182.066.338.199.468s.287.196.464.196ZM9.727 5.7a.643.643 0 0 0 .468-.197.638.638 0 0 0 .199-.47.645.645 0 0 0-.196-.476.644.644 0 0 0-.47-.194.666.666 0 0 0-.48.194.637.637 0 0 0-.2.477c0 .183.066.34.2.47.133.13.293.196.48.196ZM7.694 6.744a.645.645 0 0 0 .472-.197.64.64 0 0 0 .197-.47.659.659 0 0 0-.197-.481.641.641 0 0 0-.472-.199.646.646 0 0 0-.476.199.659.659 0 0 0-.198.481c0 .184.066.34.198.471.131.13.29.196.476.196Zm-1.61 1.62a.65.65 0 0 0 .473-.2.637.637 0 0 0 .2-.467.657.657 0 0 0-.198-.48.645.645 0 0 0-.475-.2.645.645 0 0 0-.474.2.657.657 0 0 0-.2.48.64.64 0 0 0 .2.467c.133.133.29.2.474.2Zm-1.033 2.023a.65.65 0 0 0 .472-.199c.134-.133.201-.29.201-.474a.65.65 0 0 0-.199-.473.645.645 0 0 0-.474-.2.64.64 0 0 0-.473.2.652.652 0 0 0-.198.473.65.65 0 0 0 .198.474c.131.133.29.199.473.199Zm-.378 2.256a.646.646 0 0 0 .473-.197.648.648 0 0 0 .198-.477.633.633 0 0 0-.2-.467.65.65 0 0 0-.47-.196.655.655 0 0 0-.473.196.63.63 0 0 0-.201.467c0 .187.067.345.2.477a.652.652 0 0 0 .473.197Zm.378 2.266a.645.645 0 0 0 .474-.2.65.65 0 0 0 .199-.474.645.645 0 0 0-.2-.474.65.65 0 0 0-.473-.2.642.642 0 0 0-.473.2.65.65 0 0 0-.198.474c0 .182.066.34.198.473.131.134.29.2.473.2Zm1.033 2.023a.646.646 0 0 0 .475-.2.657.657 0 0 0 .199-.48.637.637 0 0 0-.201-.467.649.649 0 0 0-.473-.2.647.647 0 0 0-.474.2.64.64 0 0 0-.2.467c0 .186.067.346.2.48.133.133.29.2.474.2Zm1.61 1.62a.642.642 0 0 0 .472-.2.659.659 0 0 0 .197-.48.64.64 0 0 0-.197-.47.644.644 0 0 0-.472-.197.652.652 0 0 0-.476.196.639.639 0 0 0-.198.47c0 .189.066.35.198.482.131.132.29.199.476.199Zm2.033 1.034c.184 0 .341-.065.471-.194a.644.644 0 0 0 .196-.477.638.638 0 0 0-.199-.47.643.643 0 0 0-.468-.196.663.663 0 0 0-.48.195.634.634 0 0 0-.2.471c0 .189.067.347.2.477.134.129.294.194.48.194Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=ar] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.98 5.33a.653.653 0 0 0 .668-.664.639.639 0 0 0-.195-.473.65.65 0 0 0-.474-.193.642.642 0 0 0-.468.196.639.639 0 0 0-.198.47c0 .187.066.344.196.472s.287.191.47.191ZM8.82 7.154c.191 0 .35-.064.478-.192a.644.644 0 0 0 .191-.474.65.65 0 0 0-.194-.476.644.644 0 0 0-.475-.196.631.631 0 0 0-.467.2.652.652 0 0 0-.196.472c0 .183.065.34.195.47.13.13.286.196.468.196Zm6.314 0a.647.647 0 0 0 .479-.192.646.646 0 0 0 .19-.474.65.65 0 0 0-.195-.476.644.644 0 0 0-.474-.196.631.631 0 0 0-.468.2.652.652 0 0 0-.196.472c0 .183.065.34.195.47.13.13.286.196.469.196ZM5.663 8.998a.657.657 0 0 0 .48-.189.642.642 0 0 0 .192-.477.635.635 0 0 0-.196-.47.653.653 0 0 0-.476-.194.638.638 0 0 0-.467.196.638.638 0 0 0-.196.468c0 .186.064.344.193.473a.64.64 0 0 0 .47.193Zm6.316.241c.255 0 .47-.087.644-.26a.878.878 0 0 0 .261-.647.872.872 0 0 0-.265-.64.872.872 0 0 0-.64-.265c-.247 0-.46.09-.639.268a.87.87 0 0 0-.268.637c0 .25.09.465.268.642a.878.878 0 0 0 .64.265Zm6.288-.241a.653.653 0 0 0 .67-.666.636.636 0 0 0-.195-.472.65.65 0 0 0-.475-.192.642.642 0 0 0-.469.196.636.636 0 0 0-.197.468c0 .186.066.344.196.473.13.128.287.193.47.193ZM8.821 11.07a.869.869 0 0 0 .645-.264.883.883 0 0 0 .26-.644.872.872 0 0 0-.265-.64.872.872 0 0 0-.64-.265.868.868 0 0 0-.636.27.871.871 0 0 0-.269.635c0 .248.09.46.267.64.178.178.391.268.638.268Zm6.314 0a.869.869 0 0 0 .645-.264.883.883 0 0 0 .26-.644.874.874 0 0 0-.264-.64.87.87 0 0 0-.641-.265c-.24 0-.451.09-.633.27a.865.865 0 0 0-.272.635c0 .248.089.46.267.64.178.178.39.268.638.268Zm-9.472 1.592a.654.654 0 0 0 .478-.191.636.636 0 0 0 .194-.472.634.634 0 0 0-.196-.472.655.655 0 0 0-.476-.191.64.64 0 0 0-.467.194A.637.637 0 0 0 5 12c0 .187.064.344.193.472a.643.643 0 0 0 .47.191Zm6.316.399c.297 0 .549-.103.754-.308.205-.206.308-.457.308-.754 0-.291-.104-.541-.312-.75a1.022 1.022 0 0 0-.75-.312c-.289 0-.537.105-.746.316-.208.21-.312.459-.312.746 0 .291.104.541.312.75.208.208.457.312.746.312Zm6.288-.399a.653.653 0 0 0 .67-.663.636.636 0 0 0-.195-.472.651.651 0 0 0-.475-.191.642.642 0 0 0-.469.196.636.636 0 0 0-.197.467c0 .187.066.344.196.472.13.127.287.191.47.191Zm-9.446 2.079c.255 0 .47-.087.644-.261a.875.875 0 0 0 .261-.644.878.878 0 0 0-.265-.64.867.867 0 0 0-.64-.268c-.247 0-.46.09-.638.271a.878.878 0 0 0-.267.637c0 .25.09.462.269.64a.875.875 0 0 0 .636.265Zm6.314 0c.255 0 .47-.087.643-.261a.875.875 0 0 0 .262-.644.88.88 0 0 0-.264-.64.866.866 0 0 0-.641-.268.865.865 0 0 0-.637.271.876.876 0 0 0-.268.637c0 .25.09.462.268.64a.874.874 0 0 0 .637.265Zm-9.472 1.59a.652.652 0 0 0 .672-.664.638.638 0 0 0-.196-.473.653.653 0 0 0-.476-.193.636.636 0 0 0-.467.197.643.643 0 0 0-.196.47c0 .186.064.343.192.471a.641.641 0 0 0 .471.192Zm6.316.241a.87.87 0 0 0 .644-.264.878.878 0 0 0 .261-.64.875.875 0 0 0-.265-.643.872.872 0 0 0-.64-.265.872.872 0 0 0-.638.27.873.873 0 0 0-.27.637c0 .252.09.465.268.641a.878.878 0 0 0 .64.264Zm6.288-.241a.65.65 0 0 0 .67-.664.64.64 0 0 0-.195-.473.648.648 0 0 0-.475-.193.64.64 0 0 0-.469.197.64.64 0 0 0-.197.47c0 .184.066.341.196.47.13.128.287.193.47.193Zm-9.446 1.85a.651.651 0 0 0 .67-.672.645.645 0 0 0-.195-.468.642.642 0 0 0-.475-.197.636.636 0 0 0-.467.197.643.643 0 0 0-.196.469.65.65 0 0 0 .195.476c.13.13.286.196.468.196Zm6.314 0a.654.654 0 0 0 .67-.672.645.645 0 0 0-.196-.468.642.642 0 0 0-.474-.197.636.636 0 0 0-.468.197.642.642 0 0 0-.196.469.65.65 0 0 0 .195.476c.13.13.286.196.469.196ZM11.979 20c.191 0 .35-.064.478-.192a.645.645 0 0 0 .191-.474.634.634 0 0 0-.195-.472.652.652 0 0 0-.474-.191.642.642 0 0 0-.468.195.636.636 0 0 0-.198.468c0 .188.066.346.196.474s.287.192.47.192Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=command] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.183 10.196v3.62H7.6c-.477 0-.913.116-1.307.346-.393.23-.707.54-.942.93-.234.39-.351.827-.351 1.311 0 .477.117.913.351 1.308.235.395.549.71.942.947.394.236.83.354 1.307.354s.913-.118 1.308-.354c.395-.237.709-.552.942-.947.233-.395.35-.83.35-1.308v-1.58h3.597v1.58c0 .477.118.913.355 1.308.236.395.55.71.942.947.391.236.827.354 1.306.354a2.49 2.49 0 0 0 1.307-.354c.393-.237.707-.552.942-.947.234-.395.351-.83.351-1.308 0-.484-.117-.92-.351-1.31-.235-.391-.549-.701-.942-.931a2.544 2.544 0 0 0-1.307-.345h-1.576v-3.621H16.4c.477 0 .913-.115 1.307-.345.393-.23.707-.54.942-.93.234-.391.351-.828.351-1.312 0-.477-.117-.913-.351-1.308a2.69 2.69 0 0 0-.942-.946A2.49 2.49 0 0 0 16.4 5c-.48 0-.915.118-1.306.355a2.724 2.724 0 0 0-.942.946c-.237.395-.355.831-.355 1.308v1.58H10.2v-1.58c0-.477-.117-.913-.35-1.308a2.673 2.673 0 0 0-.942-.946A2.497 2.497 0 0 0 7.6 5a2.49 2.49 0 0 0-1.307.355 2.688 2.688 0 0 0-.942.946C5.117 6.696 5 7.132 5 7.61c0 .484.117.921.351 1.311.235.39.549.7.942.93.394.23.83.346 1.307.346h1.583ZM7.6 9.202c-.432 0-.803-.156-1.114-.468A1.536 1.536 0 0 1 6.02 7.61c0-.431.155-.803.466-1.115.311-.312.682-.467 1.114-.467.432 0 .803.155 1.115.467.312.312.468.684.468 1.115v1.593H7.6Zm8.8 0h-1.576V7.609c0-.431.155-.803.464-1.115.31-.312.68-.467 1.112-.467.43 0 .8.155 1.112.467.312.312.468.684.468 1.115 0 .438-.156.813-.468 1.125a1.52 1.52 0 0 1-1.112.468Zm-6.2 4.628v-3.647h3.597v3.647H10.2Zm-2.6.974h1.583v1.592c0 .432-.156.804-.468 1.116a1.523 1.523 0 0 1-1.115.467c-.432 0-.803-.155-1.114-.467a1.525 1.525 0 0 1-.466-1.116c0-.438.155-.812.466-1.124.311-.312.682-.468 1.114-.468Zm8.8 0c.43 0 .8.156 1.112.468.312.312.468.687.468 1.124 0 .432-.156.804-.468 1.116a1.52 1.52 0 0 1-1.112.467c-.432 0-.802-.155-1.112-.467a1.528 1.528 0 0 1-.464-1.116v-1.592H16.4Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=doc-text-long] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.355 8.165h5.778a.415.415 0 0 0 .415-.422c0-.11-.039-.206-.118-.286a.4.4 0 0 0-.297-.12H9.355a.41.41 0 0 0-.422.406.412.412 0 0 0 .422.422Zm0 2.622h5.778c.12 0 .218-.04.297-.121a.418.418 0 0 0 .119-.304.396.396 0 0 0-.119-.289.4.4 0 0 0-.297-.12H9.355a.41.41 0 0 0-.422.409.415.415 0 0 0 .422.425Zm0 5.247h2.761a.408.408 0 0 0 .418-.405.413.413 0 0 0-.418-.422h-2.76a.412.412 0 0 0-.422.422c0 .112.04.208.12.287.08.079.18.118.301.118ZM6 17.724c0 .756.188 1.324.565 1.705.376.38.938.571 1.685.571h7.976c.749 0 1.312-.19 1.69-.571.377-.38.566-.95.566-1.705V6.276c0-.751-.189-1.319-.566-1.702-.378-.383-.941-.574-1.69-.574H8.25c-.747 0-1.31.191-1.685.574-.377.383-.565.95-.565 1.702v11.448Zm1.062-.02V6.296c0-.397.104-.702.314-.914.21-.213.52-.32.932-.32h7.866c.407 0 .717.107.927.32.21.212.316.517.316.914v11.41c0 .397-.106.702-.316.914-.21.213-.52.32-.927.32H8.308c-.412 0-.723-.107-.932-.32-.21-.212-.314-.517-.314-.914Z' fill='%23000'/%3E%3Cpath d='M15.133 13.411H9.355a.415.415 0 0 1-.422-.425.41.41 0 0 1 .422-.409h5.778a.4.4 0 0 1 .297.12c.08.08.119.177.119.289 0 .121-.04.223-.119.304a.397.397 0 0 1-.296.121Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=doc-text-short] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.355 8.165h5.778a.415.415 0 0 0 .415-.422c0-.11-.039-.206-.118-.286a.4.4 0 0 0-.297-.12H9.355a.41.41 0 0 0-.422.406.412.412 0 0 0 .422.422Zm0 2.616h2.761a.408.408 0 0 0 .418-.406.413.413 0 0 0-.418-.422h-2.76a.412.412 0 0 0-.422.422c0 .113.04.208.12.287.08.08.18.119.301.119ZM6 17.724c0 .756.188 1.324.565 1.705.376.38.938.571 1.685.571h7.976c.749 0 1.312-.19 1.69-.571.377-.38.566-.95.566-1.705V6.276c0-.751-.189-1.319-.566-1.702-.378-.383-.941-.574-1.69-.574H8.25c-.747 0-1.31.191-1.685.574-.377.383-.565.95-.565 1.702v11.448Zm1.062-.02V6.296c0-.397.104-.702.314-.914.21-.213.52-.32.932-.32h7.866c.407 0 .717.107.927.32.21.212.316.517.316.914v11.41c0 .397-.106.702-.316.914-.21.213-.52.32-.927.32H8.308c-.412 0-.723-.107-.932-.32-.21-.212-.314-.517-.314-.914Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=doc-text] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.355 8.165h5.778a.415.415 0 0 0 .415-.422c0-.11-.039-.206-.118-.286a.4.4 0 0 0-.297-.12H9.355a.41.41 0 0 0-.422.406.412.412 0 0 0 .422.422Zm0 2.622h5.778c.12 0 .218-.04.297-.121a.418.418 0 0 0 .119-.304.396.396 0 0 0-.119-.289.4.4 0 0 0-.297-.12H9.355a.41.41 0 0 0-.422.409.415.415 0 0 0 .422.425Zm0 2.617h2.761a.408.408 0 0 0 .418-.406.413.413 0 0 0-.418-.422h-2.76a.412.412 0 0 0-.422.422c0 .112.04.208.12.287.08.08.18.119.301.119ZM6 17.724c0 .756.188 1.324.565 1.705.376.38.938.571 1.685.571h7.976c.749 0 1.312-.19 1.69-.571.377-.38.566-.95.566-1.705V6.276c0-.751-.189-1.319-.566-1.702-.378-.383-.941-.574-1.69-.574H8.25c-.747 0-1.31.191-1.685.574-.377.383-.565.95-.565 1.702v11.448Zm1.062-.02V6.296c0-.397.104-.702.314-.914.21-.213.52-.32.932-.32h7.866c.407 0 .717.107.927.32.21.212.316.517.316.914v11.41c0 .397-.106.702-.316.914-.21.213-.52.32-.927.32H8.308c-.412 0-.723-.107-.932-.32-.21-.212-.314-.517-.314-.914Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=cross] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 6L18 18M18 6L6 18' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
}
[data-icon=arrow-up-right] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m19 15.477-.02-9.672a.802.802 0 0 0-.218-.577c-.145-.152-.34-.228-.587-.228H8.499a.751.751 0 0 0-.777.76c0 .199.076.371.227.517.15.145.326.218.525.218h3.733l4.52-.129-1.728 1.54-9.767 9.783a.692.692 0 0 0-.232.518c0 .205.078.387.235.545a.74.74 0 0 0 .542.237.73.73 0 0 0 .527-.224l9.775-9.78 1.544-1.727-.143 4.188v4.065c0 .199.075.376.225.531.15.155.327.232.531.232.202 0 .38-.076.534-.228a.768.768 0 0 0 .23-.569Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=arrow-right] {
--icon:url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 11.598c0-.25-.103-.47-.308-.66l-5.674-5.663A.912.912 0 0 0 13.369 5a.839.839 0 0 0-.858.858c0 .117.02.23.06.34.041.11.102.202.182.276l1.518 1.572 3.717 3.354.198-.484-2.925-.209H4.88c-.264 0-.477.084-.638.253a.886.886 0 0 0-.242.638c0 .256.08.47.242.638.161.168.374.253.638.253h10.38l2.926-.21-.198-.472-3.717 3.343-1.518 1.572a.682.682 0 0 0-.181.275.983.983 0 0 0-.06.341.84.84 0 0 0 .858.858.912.912 0 0 0 .648-.275l5.674-5.663c.205-.19.308-.41.308-.66Z' fill='%23000'/%3E%3C/svg%3E")
}
[data-icon=arrow-left-curve] {
--icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath fill='%23000' d='M20.088 14.434c0-1.113-.24-2.093-.721-2.937-.481-.845-1.174-1.505-2.08-1.98-.904-.475-1.993-.713-3.265-.713H8.723l-2.83.123.267.485 2.095-1.77 2.159-2.111a.847.847 0 0 0 .27-.64.877.877 0 0 0-.246-.64c-.164-.167-.38-.251-.652-.251a.915.915 0 0 0-.667.286L4.292 9.039a.898.898 0 0 0-.292.68c0 .269.097.498.292.688l4.828 4.75c.19.19.413.285.667.285.271 0 .488-.084.652-.251a.885.885 0 0 0 .245-.645.863.863 0 0 0-.072-.36.85.85 0 0 0-.197-.274l-2.16-2.108-2.094-1.772-.266.487 2.83.12h5.35c.905 0 1.668.159 2.29.475.621.316 1.094.754 1.419 1.314.324.56.486 1.207.486 1.94 0 .727-.162 1.378-.486 1.951a3.416 3.416 0 0 1-1.42 1.352c-.621.328-1.385.492-2.29.492h-1.957a.893.893 0 0 0-.67.268.896.896 0 0 0-.26.647.904.904 0 0 0 .931.922h2.014c1.253 0 2.323-.23 3.211-.691.888-.46 1.568-1.109 2.039-1.944.47-.835.706-1.812.706-2.93Z'/%3E%3C/svg%3E")
}
[data-icon=list-bullet] {
--icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M7.82 7.05h12.99a.738.738 0 0 0 .543-.222.738.738 0 0 0 .222-.543.735.735 0 0 0-.222-.54.738.738 0 0 0-.543-.222H7.82a.738.738 0 0 0-.543.222.736.736 0 0 0-.221.54c0 .214.074.395.221.543a.738.738 0 0 0 .543.222Zm0 5.747h12.99a.738.738 0 0 0 .543-.222.738.738 0 0 0 .222-.542.738.738 0 0 0-.222-.543.738.738 0 0 0-.543-.222H7.82a.738.738 0 0 0-.543.222.738.738 0 0 0-.221.543c0 .213.074.394.221.542a.738.738 0 0 0 .543.222Zm0 5.745h12.99a.738.738 0 0 0 .543-.222.736.736 0 0 0 .222-.54.738.738 0 0 0-.222-.543.738.738 0 0 0-.543-.222H7.82a.738.738 0 0 0-.543.222.738.738 0 0 0-.221.543c0 .212.074.392.221.54a.738.738 0 0 0 .543.222ZM3.625 7.484c.328 0 .61-.118.844-.352.235-.234.352-.517.352-.847 0-.328-.117-.61-.352-.844a1.152 1.152 0 0 0-.844-.352c-.33 0-.613.117-.847.352a1.152 1.152 0 0 0-.352.844c0 .33.117.613.352.847.234.234.516.352.847.352Zm0 5.747c.328 0 .61-.118.844-.353.235-.235.352-.517.352-.845 0-.33-.117-.611-.352-.846a1.15 1.15 0 0 0-.844-.353c-.33 0-.613.118-.847.353a1.155 1.155 0 0 0-.352.846c0 .328.117.61.352.845.234.235.516.353.847.353Zm0 5.745c.328 0 .61-.117.844-.352.235-.234.352-.516.352-.844 0-.33-.117-.613-.352-.847a1.152 1.152 0 0 0-.844-.352c-.33 0-.613.118-.847.352a1.154 1.154 0 0 0-.352.847c0 .328.117.61.352.844.234.235.516.352.847.352Z'/%3E%3C/svg%3E")
}
[data-icon=list-check] {
--icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M5.99 10.658a3.56 3.56 0 0 0 1.877-.515 3.937 3.937 0 0 0 1.362-1.366c.34-.568.51-1.192.51-1.873 0-.69-.17-1.32-.51-1.891a3.903 3.903 0 0 0-1.363-1.367 3.575 3.575 0 0 0-1.875-.51c-.688 0-1.317.17-1.888.51a3.88 3.88 0 0 0-1.367 1.367c-.34.57-.51 1.2-.51 1.89 0 .682.172 1.306.515 1.874a3.98 3.98 0 0 0 1.366 1.366 3.572 3.572 0 0 0 1.884.514Zm-.45-1.74c-.145 0-.29-.08-.433-.242l-.988-1.18a.558.558 0 0 1-.105-.349c0-.124.042-.229.126-.316a.407.407 0 0 1 .303-.13c.082 0 .154.017.216.051a.603.603 0 0 1 .183.17l.678.86 1.557-2.49c.1-.167.23-.25.395-.25.119 0 .223.04.313.12.09.082.135.18.135.296 0 .11-.039.228-.116.352L5.99 8.672a.515.515 0 0 1-.45.246Zm.45 11.835a3.55 3.55 0 0 0 1.876-.515 3.942 3.942 0 0 0 1.362-1.372c.34-.57.511-1.197.511-1.881 0-.688-.17-1.315-.51-1.883a3.945 3.945 0 0 0-1.363-1.367 3.555 3.555 0 0 0-1.875-.515c-.689 0-1.318.172-1.889.516-.57.343-1.026.799-1.366 1.366a3.593 3.593 0 0 0-.51 1.883c0 .682.172 1.31.515 1.88a3.97 3.97 0 0 0 1.366 1.373 3.567 3.567 0 0 0 1.884.515Zm0-1.273c-.452 0-.868-.115-1.246-.344a2.626 2.626 0 0 1-.906-.913 2.374 2.374 0 0 1-.338-1.238c0-.453.112-.867.338-1.242a2.64 2.64 0 0 1 .907-.907c.379-.23.794-.344 1.246-.344.447 0 .858.114 1.234.344.375.23.676.532.903.908.226.375.34.79.34 1.24 0 .448-.114.86-.34 1.24a2.645 2.645 0 0 1-.903.912 2.32 2.32 0 0 1-1.234.344Zm6.364-11.921h8.755c.183 0 .34-.064.47-.19a.626.626 0 0 0 .194-.465.625.625 0 0 0-.194-.466.648.648 0 0 0-.47-.19h-8.755a.645.645 0 0 0-.474.19.631.631 0 0 0-.19.466c0 .182.063.337.19.464s.285.191.474.191Zm0 10.081h8.755c.183 0 .34-.063.47-.19a.625.625 0 0 0 .194-.465.626.626 0 0 0-.194-.465.647.647 0 0 0-.47-.19h-8.755a.643.643 0 0 0-.474.19.632.632 0 0 0-.19.465c0 .184.063.339.19.465.127.127.285.19.474.19Z'/%3E%3C/svg%3E")
}
[data-icon=doc-copy] {
--icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M6.95 3.5h1.361c.659 0 1.263.094 1.813.285.55.19 1.087.548 1.612 1.073l5.338 5.324c.527.527.867 1.071 1.02 1.633.153.561.23 1.162.23 1.802v5.415h.363c.645 0 1.184-.11 1.617-.33.433-.22.757-.548.974-.984.217-.435.326-.98.326-1.633V3.044c0-.977-.244-1.713-.732-2.207-.488-.493-1.216-.74-2.185-.74h-8.83c-.967 0-1.694.245-2.179.735-.485.491-.728 1.228-.728 2.212v.455Zm4.434-.736v-.203c0-.143.05-.27.147-.384.099-.113.25-.17.454-.17h4.584c.203 0 .353.057.451.17.099.114.148.241.148.384v.203c0 .143-.049.27-.148.383-.098.114-.248.17-.45.17h-4.585c-.204 0-.355-.056-.454-.17a.568.568 0 0 1-.147-.383ZM2.397 20.773c0 .983.243 1.72.727 2.21.485.491 1.212.736 2.18.736h8.83c.969 0 1.697-.246 2.185-.74s.732-1.23.732-2.206v-7.415h-6.564c-.605 0-1.051-.145-1.337-.435-.286-.29-.43-.738-.43-1.344V4.784H5.306c-.968 0-1.694.247-2.18.74-.485.495-.728 1.23-.728 2.207v13.042Zm8.088-8.7h6.394a1.885 1.885 0 0 0-.243-.547 3.878 3.878 0 0 0-.491-.595l-5.007-5.107a5.707 5.707 0 0 0-.591-.524 1.61 1.61 0 0 0-.552-.28v6.563c0 .327.164.49.49.49Z'/%3E%3C/svg%3E")
}
[data-icon=file-menu] {
--icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M6.406 8.51h7.08A.5.5 0 0 0 14 7.988a.498.498 0 0 0-.514-.506h-7.08a.51.51 0 0 0-.376.148.488.488 0 0 0-.147.358c0 .153.049.278.147.376a.511.511 0 0 0 .376.146Zm0 7.997h7.08c.146 0 .269-.049.367-.147a.485.485 0 0 0 .147-.357.51.51 0 0 0-.147-.376.499.499 0 0 0-.368-.147H6.406a.51.51 0 0 0-.376.147.51.51 0 0 0-.147.376c0 .14.049.259.147.357a.51.51 0 0 0 .376.147Zm-1.644 3.198h14.476c.883 0 1.542-.217 1.976-.652.433-.435.65-1.084.65-1.946V6.893c0-.862-.217-1.51-.65-1.946-.434-.436-1.093-.654-1.976-.654H4.762c-.87 0-1.525.217-1.966.652-.44.434-.66 1.083-.66 1.948v10.214c0 .864.22 1.512.66 1.947.44.434 1.096.651 1.966.651Zm.022-1.354c-.418 0-.74-.11-.965-.333-.225-.222-.337-.548-.337-.978V6.958c0-.435.112-.763.337-.982.225-.22.547-.329.965-.329h14.432c.416 0 .737.11.963.329.227.22.34.547.34.982V17.04c0 .43-.113.756-.34.978-.226.222-.547.333-.962.333H4.784Zm.867-4.38h12.697c.345 0 .615-.103.81-.308.195-.204.293-.477.293-.817v-1.708c0-.34-.098-.613-.293-.818-.195-.204-.465-.306-.81-.306H5.65c-.344 0-.614.102-.809.306-.195.205-.292.478-.292.818v1.708c0 .34.097.613.292.817.195.205.465.307.809.307Zm.755-1.46a.51.51 0 0 1-.523-.521c0-.14.049-.26.147-.358a.51.51 0 0 1 .376-.147h4.12a.502.502 0 0 1 .515.506.508.508 0 0 1-.516.52H6.406Z'/%3E%3C/svg%3E")
}
[data-icon=edit] {
--icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M6.478 20.908h11.329c.867 0 1.54-.249 2.021-.747.48-.499.72-1.245.72-2.238V7.607l-1.561 1.552v8.678c0 .502-.117.881-.351 1.137a1.116 1.116 0 0 1-.854.383H6.502c-.481 0-.85-.128-1.105-.383-.256-.256-.383-.635-.383-1.137V6.893c0-.503.127-.882.383-1.137.255-.255.624-.383 1.106-.383h8.792l1.552-1.552H6.478c-1.002 0-1.757.249-2.265.747-.507.497-.761 1.244-.761 2.239v11.116c0 .995.254 1.741.761 2.239.508.497 1.263.746 2.265.746ZM10 14.658l1.877-.819 9.003-9-1.325-1.297-8.99 8.992-.864 1.814c-.045.083-.03.165.044.245.075.08.16.101.255.064Zm11.594-10.53.694-.708a.851.851 0 0 0 .246-.574.72.72 0 0 0-.24-.553l-.226-.227a.672.672 0 0 0-.538-.205.818.818 0 0 0-.547.254l-.707.695 1.318 1.318Z'/%3E%3C/svg%3E")
}
[data-icon=paragraph] {
--icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M2.167 6.811c0 1.212.268 2.274.805 3.184a5.47 5.47 0 0 0 2.264 2.117c.972.5 2.108.75 3.406.75h1.967v9.388c0 .341.1.615.302.82.202.207.472.31.812.31.341 0 .615-.103.82-.31.207-.205.31-.479.31-.82V2.996h2.636V22.25c0 .341.099.615.296.82.197.207.467.31.808.31.34 0 .615-.103.825-.31.21-.205.315-.479.315-.82V2.996h2.041c.35 0 .626-.103.828-.309.201-.205.302-.478.302-.818 0-.35-.1-.624-.302-.82-.202-.198-.478-.297-.828-.297H8.591c-1.29 0-2.417.25-3.381.752a5.452 5.452 0 0 0-2.245 2.119c-.532.911-.798 1.974-.798 3.188Z'/%3E%3C/svg%3E")
}
[data-icon=lock] {
--icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M6.712 22.408H17.23c.711 0 1.242-.181 1.592-.544.35-.363.526-.933.526-1.71v-8.108c0-.77-.175-1.338-.526-1.704-.35-.367-.88-.55-1.592-.55H6.933c-.718 0-1.29.185-1.714.555-.424.371-.636.937-.636 1.699v8.108c0 .777.175 1.347.525 1.71.35.363.885.544 1.604.544ZM6.34 10.542h1.787V6.793c0-.925.177-1.704.53-2.337.352-.633.82-1.11 1.404-1.432a3.88 3.88 0 0 1 1.904-.482c.686 0 1.32.16 1.903.482.583.322 1.053.8 1.41 1.432.358.633.537 1.412.537 2.337v3.75h1.778V7.03c0-1.391-.268-2.544-.805-3.46-.537-.915-1.234-1.597-2.092-2.046a5.805 5.805 0 0 0-2.73-.674c-.964 0-1.874.225-2.732.674-.858.45-1.555 1.131-2.09 2.047-.536.915-.804 2.068-.804 3.459v3.512Z'/%3E%3C/svg%3E")
}
[data-icon=chevron-right] {
--icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M18.186 12.057a.882.882 0 0 0-.28-.65L10.124 3.8a.863.863 0 0 0-.633-.262.881.881 0 0 0-.647.255.863.863 0 0 0-.258.638c0 .24.087.453.26.64l7.148 6.986-7.147 6.987a.916.916 0 0 0-.26.64c0 .255.085.468.257.638.171.17.387.255.647.255a.863.863 0 0 0 .633-.263l7.782-7.607a1.12 1.12 0 0 0 .207-.3.83.83 0 0 0 .073-.35Z'/%3E%3C/svg%3E")
}
[data-icon=bell-slash] {
--icon:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11.98 22.835c.884 0 1.619-.276 2.205-.826.586-.551.912-1.19.978-1.916h-6.37c.075.727.405 1.365.991 1.916.586.55 1.318.826 2.195.826Zm-8.23-4.149h12.533L5.447 7.835c-.113.49-.199 1.01-.257 1.558a19.625 19.625 0 0 0-.1 1.747c-.027.397-.072.812-.135 1.243a6.906 6.906 0 0 1-.285 1.215c-.128.379-.306.69-.534.931-.45.46-.888.927-1.315 1.403-.427.476-.64.972-.64 1.488 0 .377.139.683.418.916.28.233.663.35 1.151.35ZM11.98.982c-.769 0-1.411.235-1.928.705A3.682 3.682 0 0 0 8.98 3.403a4.625 4.625 0 0 0-1.427.781l13.961 13.988c.176-.192.264-.442.264-.752 0-.516-.213-1.012-.64-1.488a44.165 44.165 0 0 0-1.315-1.403 2.542 2.542 0 0 1-.534-.931 6.41 6.41 0 0 1-.282-1.215 19.599 19.599 0 0 1-.13-1.243c-.039-1.993-.353-3.655-.942-4.985-.588-1.33-1.575-2.248-2.96-2.752a3.592 3.592 0 0 0-1.065-1.716c-.52-.47-1.163-.705-1.93-.705ZM2.415 3.08l18.647 18.638a.777.777 0 0 0 .571.234.742.742 0 0 0 .56-.234.785.785 0 0 0 .238-.566.736.736 0 0 0-.238-.563L3.556 1.949a.776.776 0 0 0-.567-.233.78.78 0 0 0-.573.232.777.777 0 0 0-.233.571c0 .225.077.412.233.56Z'/%3E%3C/svg%3E")
}
@font-face {
font-family:Inter;
font-display:block;
src:url(/fonts/inter-subset.woff2) format("woff2");
font-weight:100 900
}
@font-face {
font-family:Newsreader;
font-display:block;
src:url(/fonts/newsreader-subset-0.woff2) format("woff2");
font-weight:400;
font-style:italic
}
@font-face {
font-family:Sohne;
font-display:block;
src:url(/fonts/sohne-subset-0.woff2) format("woff2");
font-weight:400
}
[basics-prose] p,
[basics-text] {
margin:0;
letter-spacing:0;
font-size:var(--text);
line-height:var(--leading);
font-feature-settings:"kern","frac","kern","ss02"
}
[basics-prose] :where(h1,
h2,
h3,
h4,
h5,
h6,
p,
li),
[basics-text]:where(h1,
h2,
h3,
h4,
h5,
h6,
p,
li) {
font:var(--type)
}
[basics-prose] :where(b),
[basics-text] :where(b) {
font-weight:500
}
[basics-heading],
[basics-prose] :where(h1,
h2,
h3,
h4,
h5,
h6) {
font:var(--type-heading);
font-feature-settings:"kern","calt","case"
}
[basics-prose] :where(em,
i),
[basics-text] :where(em,
i),
[basics-text]:where(em,
i) {
font:var(--type-italic);
color:var(--fg)
}
[basics-text][basics-size=small] {
font:var(--type-s)
}
[basics-text][basics-color=dim] {
color:var(--mono11)
}
[basics-text][basics-color=lowcontrast],
[basics-text][basics-color=lowcontrast] _ {
color:var(--mono9)
}
[basics-prose] {
width:100%;
max-width:var(--content-width);
color:var(--text-color)
}
[basics-prose]::-moz-selection {
background:var(--transparent)
}
[basics-prose]::selection {
background:var(--transparent)
}
[basics-prose]>:first-child {
margin-top:0
}
[basics-prose]>:not(:last-child),
[basics-prose]>[basics-codeblock] {
margin-bottom:28px;
}
[basics-prose]>:where(h1,
h2,
h3,
h4,
h5,
h6) {
margin-top:56px;
margin-bottom:28px
}
[basics-prose]>:where([basics-scroller]) {
margin-top:64px
}
[basics-prose]>:where([basics-separator]) {
margin:var(--gap-4x) 0
}
[basics-prose][basics-variant~=dropcaps]>p:first-of-type:first-letter {
float:left;
font-family:var(--font-serif);
font-style:italic;
font-size:4rem;
line-height:.8;
margin:0 .1em -.3em 0;
padding:.2em .1em .1em
}
[basics-prose] blockquote {
color:var(--mono11);
position:relative;
quotes:"“" "”" "‘" "’";
--quote-offset:2px
}
[basics-prose] blockquote:before {
content:open-quote;
position:absolute;
left:calc(-1 _ var(--quote-offset));
transform:translateX(-100%);
line-height:var(--leading);
font-size:var(--text)
}
[basics-prose] blockquote :last-child:after {
content:close-quote;
margin-left:var(--quote-offset)
}
[basics-prose] blockquote _ {
color:var(--mono11)
}
[basics-prose] [basics-figure] {
margin:var(--gap-8x) 0
}
[basics-prose] ul {
list-style-type:disc;
list-style-position:outside;
padding-left:16px
}
[basics-prose] li>ul {
list-style-type:circle
}
[basics-prose] ol {
--counter-space:12px;
counter-reset:basics-ol;
list-style-type:none;
padding:0
}
[basics-prose] ol:last-child li {
font-size:var(--text-s);
line-height:var(--leading-s)
}
[basics-prose] li {
display:list-item;
line-height:var(--leading)
}
[basics-prose] li::marker {
color:var(--mono11)
}
[basics-prose] li+li,
[basics-prose] li>ul {
margin-top:var(--gap)
}
[basics-prose] ol li {
--l:calc(var(--counter-space) + var(--gap-2x));
text-indent:calc(-1 _ var(--l));
padding-left:var(--l)
}
[basics-prose] ol li:before {
counter-increment:basics-ol;
content:counter(basics-ol);
display:inline-flex;
align-items:center;
justify-content:flex-end;
text-align:right;
min-width:var(--counter-space);
margin-right:var(--gap-2x);
-webkit-user-select:none;
-moz-user-select:none;
user-select:none;
color:var(--mono11);
font-feature-settings:"tnum" 1;
letter-spacing:-.05em;
line-height:normal
}
:where([basics-sidenote]) {
--side:12px;
--page-margin:calc((100vw - var(--content-width)) / 2);
position:absolute;
left:calc(var(--content-width) + var(--side));
width:calc(var(--page-margin) - var(--side) - 48px);
max-width:192px
}
[basics-prose] [basics-sidenote] {
margin-top:3px;
font-size:14px;
line-height:22px;
color:var(--mono9)
}
:where([basics-sidenote][basics-variant~=left]) {
left:unset;
right:calc(var(--content-width) + var(--side))
}
@media (max-width:1024px) {
:where([basics-sidenote]) {
position:static;
width:unset;
left:unset;
right:unset;
max-width:unset
}
}
html[data-focus=blur] {
cursor:crosshair
}
html[data-focus=blur] [basics-prose] :where(p,
pre,
li,
img,
div,
blockquote) {
transition:var(--transition-xx);
transition-property:opacity,filter
}
html[data-focus=blur] [basics-prose] :where(p,
pre,
li,
img,
div,
blockquote) {
opacity:.6;
filter:blur(2px)!important
}
@media (hover:hover) {
html[data-focus=blur] [basics-prose] :where(p,
pre,
li,
img,
div,
blockquote):hover {
opacity:1;
filter:none!important
}
}
:root {
--gray1:#fcfcfc;
--gray2:#f8f8f8;
--gray3:#f3f3f3;
--gray4:#ededed;
--gray5:#e8e8e8;
--gray6:#e2e2e2;
--gray7:#dbdbdb;
--gray8:#c7c7c7;
--gray9:#8f8f8f;
--gray10:#858585;
--gray11:#6f6f6f;
--gray12:#171717;
--grayA1:rgba(0,0,0,.012);
--grayA2:rgba(0,0,0,.027);
--grayA3:rgba(0,0,0,.047);
--grayA4:rgba(0,0,0,.071);
--grayA5:rgba(0,0,0,.09);
--grayA6:rgba(0,0,0,.114);
--grayA7:rgba(0,0,0,.141);
--grayA8:rgba(0,0,0,.22);
--grayA9:rgba(0,0,0,.439);
--grayA10:rgba(0,0,0,.478);
--grayA11:rgba(0,0,0,.565);
--grayA12:rgba(0,0,0,.91);
--blackA1:rgba(0,0,0,.012);
--blackA2:rgba(0,0,0,.027);
--blackA3:rgba(0,0,0,.047);
--blackA4:rgba(0,0,0,.071);
--blackA5:rgba(0,0,0,.09);
--blackA6:rgba(0,0,0,.114);
--blackA7:rgba(0,0,0,.141);
--blackA8:rgba(0,0,0,.22);
--blackA9:rgba(0,0,0,.439);
--blackA10:rgba(0,0,0,.478);
--blackA11:rgba(0,0,0,.565);
--blackA12:rgba(0,0,0,.91);
color-scheme:light;
--white:#fff;
--black:#000;
--selection:var(--grayA4);
--bg:var(--white);
--fg:var(--gray12);
--text-color:#3a3a3a;
--alpha:hsla(0,0%,100%,.9);
--shadow-color:hsla(0,6%,6%,.05);
--mono1:var(--gray1);
--mono2:var(--gray2);
--mono3:var(--gray3);
--mono4:var(--gray4);
--mono5:var(--gray5);
--mono6:var(--gray6);
--mono7:var(--gray7);
--mono8:var(--gray8);
--mono9:var(--gray9);
--mono10:var(--gray10);
--mono11:var(--gray11);
--mono12:var(--gray12);
--indigo:#5856d6
}
@media (prefers-color-scheme:dark) {
:root {
color-scheme:dark;
--fg:#f2f2f2;
--bg:var(--gray1);
--text-color:#e5e5e5;
--alpha:rgba(28,28,28,.9);
--shadow-color:rgba(0,0,0,.55);
--gray1:#1a1a1a;
--gray2:#1c1c1c;
--gray3:#232323;
--gray4:#282828;
--gray5:#2e2e2e;
--gray6:#343434;
--gray7:#3e3e3e;
--gray8:#505050;
--gray9:#707070;
--gray10:#7e7e7e;
--gray11:#a0a0a0;
--gray12:#ededed;
--grayA1:hsla(0,0%,100%,0);
--grayA2:hsla(0,0%,100%,.026);
--grayA3:hsla(0,0%,100%,.056);
--grayA4:hsla(0,0%,100%,.077);
--grayA5:hsla(0,0%,100%,.103);
--grayA6:hsla(0,0%,100%,.129);
--grayA7:hsla(0,0%,100%,.172);
--grayA8:hsla(0,0%,100%,.249);
--grayA9:hsla(0,0%,100%,.386);
--grayA10:hsla(0,0%,100%,.446);
--grayA11:hsla(0,0%,100%,.592);
--grayA12:hsla(0,0%,100%,.923);
--indigo:#5e5ce6
}
}
@keyframes opacityIn {
0% {
opacity:0
}
to {
opacity:1
}
}
@keyframes opacityOut {
0% {
opacity:1
}
to {
opacity:0
}
}
[basics-codeblock] :where(.tok-comment) {
color:var(--mono9)
}
[basics-codeblock] :where(.delimiter,
.boolean,
.selector,
.important,
.atrule) {
color:var(--mono10)
}
[basics-codeblock] :where(.tok-keyword) {
color:var(--mono10)
}
[basics-codeblock] :where(.tag,
.doctype,
.builtin) {
color:var(--mono12)
}
[basics-codeblock] :where(.tok-operator,
.tok-punctuation,
.attr-name) {
color:var(--mono9)
}
[basics-codeblock] :where(.entity,
.number,
.symbol) {
color:var(--mono10)
}
[basics-codeblock] :where(.property,
.constant,
.property-access) {
color:var(--mono11)
}
[basics-codeblock] :where(.tok-string,
.tok-number) {
color:var(--mono11)
}
[basics-codeblock] :where() {
color:var(--mono12)
}
[basics-code],
[basics-prose] code:not(pre code) {
color:var(--mono12);
background:var(--mono4);
border-radius:6px;
font:var(--type-code);
padding:4px
}
[basics-link] [basics-code],
[basics-prose] a code {
text-decoration:underline;
-webkit-text-decoration-color:var(--mono8);
text-decoration-color:var(--mono8);
text-decoration-thickness:2px;
text-underline-offset:2px
}
[basics-codeblock],
[basics-prose] pre {
-moz-tab-size:4;
-o-tab-size:4;
tab-size:4;
font-size:13px;
background:var(--mono3);
border-radius:var(--radius);
padding:12px 16px;
font-family:var(--font-mono);
line-height:24px;
position:relative;
margin:0;
overflow-x:auto
}
[basics-codeblock] code,
[basics-prose] pre code {
font-family:var(--font-mono)
}
[basics-codeblock][basics-variant~=lines] {
padding-left:0
}
[basics-codeblock][basics-variant~=lines]>[basics-codeblock-line]:before {
display:inline-block;
width:3ch;
content:attr(basics-codeblock-line);
text-align:right;
margin-right:3ch;
color:var(--mono9)
}
[basics-codeblock-copy][basics-button] {
cursor:copy;
position:absolute;
top:8px;
right:8px;
--hover-border:var(--mono7);
--hover-background:var(--mono7);
--active-border:var(--mono7);
--active-background:var(--mono7)
}
[basics-codeblock-line][basics-highlight] {
background:var(--mono7);
margin-right:-16px
}
[basics-link] {
cursor:pointer;
line-height:normal;
text-decoration:none;
outline-offset:2px
}
[basics-link][data-disabled][disabled] {
cursor:not-allowed;
color:var(--mono8)
}
[basics-link][basics-variant~=heading] {
border:none
}
[basics-link][basics-variant~=heading]:after {
content:"";
display:inline-block;
vertical-align:middle;
width:15px;
height:16px;
background-repeat:no-repeat;
background-image:url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='%23838383' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'%3E%3Cpath d='M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z' fill-rule='evenodd' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");
opacity:0;
margin-left:var(--gap);
transition:var(--transition-med);
transition-property:opacity
}
[basics-link][basics-variant~=heading][data-focus]:not([disabled]):after {
opacity:1
}
@media (hover:hover) {
[basics-link][basics-variant~=heading]:not([disabled]):hover:after {
opacity:1
}
}
[basics-link][basics-variant~=text],
[basics-prose] :where(p,
li) a {
position:relative;
transition:var(--transition-xx);
transition-property:-webkit-text-decoration-color;
transition-property:text-decoration-color;
transition-property:text-decoration-color,-webkit-text-decoration-color;
text-decoration:underline;
-webkit-text-decoration-color:var(--mono8);
text-decoration-color:var(--mono8);
text-decoration-thickness:1px;
text-underline-offset:2.5px
}
@media (hover:hover) {
:is([basics-prose] :where(p,
li) a,
[basics-link][basics-variant~=text]):hover:not([disabled]) {
transition:var(--transition-fast);
-webkit-text-decoration-color:var(--mono11);
text-decoration-color:var(--mono11)
}
}
[basics-link][basics-variant~=icon][href^=http]:after {
content:"";
display:inline-block;
vertical-align:middle;
width:16px;
height:16px;
margin-left:2px;
transform:translateY(-1px);
--icon:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.6928 18.3072C5.30227 17.9167 5.30227 17.2835 5.69279 16.893L15.9857 6.6001L9.5999 6.6001C9.04762 6.6001 8.5999 6.15238 8.5999 5.6001C8.5999 5.04781 9.04762 4.6001 9.59991 4.6001L18.3999 4.6001C18.6651 4.6001 18.9195 4.70545 19.107 4.89299C19.2945 5.08053 19.3999 5.33488 19.3999 5.6001L19.3999 14.4001C19.3999 14.9524 18.9522 15.4001 18.3999 15.4001C17.8476 15.4001 17.3999 14.9524 17.3999 14.4001L17.3999 8.01432L7.10701 18.3072C6.71649 18.6977 6.08332 18.6977 5.6928 18.3072Z' fill='currentColor'/%3E%3C/svg%3E%0A");
-webkit-mask:var(--icon) no-repeat;
mask:var(--icon) no-repeat;
background-color:var(--mono9)
}
[basics-separator] {
background:var(--mono5);
border:none;
margin:0
}
[basics-separator][aria-orientation=horizontal] {
height:1px
}
[basics-separator][aria-orientation=vertical] {
width:1px;
height:100%
}
[basics-figure] {
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
overflow:visible
}
[basics-figure] img,
[basics-image] {
font-size:0;
border-radius:6px;
overflow:hidden;
display:flex;
filter:drop-shadow(0 25px 20px rgba(0,0,0,.1))
}
[basics-image][basics-variant~=avatar],
[basics-image][basics-variant~=avatar] img {
border-radius:50%
}
[basics-caption],
[basics-figure] figpcation {
font-size:var(--text-s);
line-height:var(--leading-s);
color:var(--mono11);
margin-top:var(--gap-2x)
}
[basics-scroller] {
--scrollbar-padding:40px;
--scrollbar-size:6px;
--gradient-size-start:var(--body-margin-left);
--gradient-size-end:0px;
position:relative;
left:50%;
margin-left:-50vw;
width:100vw;
display:flex;
overflow-x:auto;
padding-bottom:var(--scrollbar-padding);
padding-left:var(--body-margin-left);
padding-right:var(--body-margin-right);
-webkit-mask-image:linear-gradient(to right,transparent 0,#000 var(--gradient-size-start),#000 calc(100% - var(--gradient-size-end)),transparent 100%);
mask-image:linear-gradient(to right,transparent 0,#000 var(--gradient-size-start),#000 calc(100% - var(--gradient-size-end)),transparent 100%)
}
[basics-scroller]:before {
content:"";
min-width:calc((100vw - var(--content-width)) / 2 - var(--body-margin-left))
}
[basics-scroller]:after {
content:"";
min-width:max(24px,calc((100vw - var(--content-width)) / 2 - var(--body-margin-right)))
}
@media (max-width:688px) {
[basics-scroller] {
--gradient-size-start:24px;
--gradient-size-end:20%
}
}
[basics-tooltip] {
border:1px solid var(--mono6);
background:var(--bg);
border-radius:6px;
padding:5px 10px;
box-shadow:var(--shadow-s);
font:var(--type-s);
font-feature-settings:"tnum";
font-variant-numeric:tabular-nums
}
[basics-tooltip] [basics-arrow] {
fill:var(--mono2)
}
[basics-tooltip] {
animation:tooltipIn var(--transition-fast) forwards
}
[basics-tooltip][data-state=closed] {
animation:tooltipOut var(--transition-fast) forwards
}
@keyframes tooltipIn {
0% {
opacity:0;
transform:scale(.9)
}
to {
opacity:1;
transform:none
}
}
@keyframes tooltipOut {
0% {
opacity:1;
transform:none
}
to {
opacity:0;
transform:scale(.9)
}
}
[cmdk-root] {
min-width:640px;
border-radius:var(--radius);
overflow:hidden;
border:1px solid var(--mono5)
}
[cmdk-input],
[cmdk-root] {
background:var(--bg);
font-family:var(--font-sans)
}
[cmdk-input] {
border:none;
width:100%;
font-size:var(--text);
height:48px;
padding:0 var(--gap-2x);
outline:none;
color:var(--fg);
border-bottom:1px solid var(--mono5)
}
[cmdk-input]::-moz-placeholder {
color:var(--mono9)
}
[cmdk-input]::placeholder {
color:var(--mono9)
}
[cmdk-item] {
content-visibility:auto;
cursor:pointer;
height:36px;
margin:0 var(--gap);
border-radius:var(--radius-s);
display:flex;
align-items:center;
padding:0 var(--gap-2x);
color:var(--mono11);
-webkit-user-select:none;
-moz-user-select:none;
user-select:none;
will-change:background,color;
transition:var(--transition-fast);
transition-property:none
}
[cmdk-item][aria-selected=true] {
background:var(--mono3);
color:var(--mono12)
}
[cmdk-item][aria-disabled=true] {
color:var(--mono8);
cursor:not-allowed
}
[cmdk-item]:active {
transition-property:background;
background:var(--mono4)
}
[cmdk-item]:first-child {
margin-top:8px
}
[cmdk-item]:last-child {
margin-bottom:8px
}
[cmdk-item]+[cmdk-item] {
margin-top:4px
}
[cmdk-list] {
padding-bottom:var(--gap);
height:min(300px,calc(var(--cmdk-list-height) + 16px));
max-height:400px;
overflow:auto;
overscroll-behavior:contain;
scroll-padding-block-start:32px;
scroll-padding-block-end:8px;
transition:var(--transition-fast);
transition-property:height
}
[cmdk-separator] {
height:1px;
width:100%;
background:var(--mono5);
margin:var(--gap) 0
}
[cmdk-group-heading] {
-webkit-user-select:none;
-moz-user-select:none;
user-select:none;
font-size:var(--text-s);
color:var(--mono11);
padding-left:var(--gap-2x);
background:var(--mono4);
height:24px;
display:flex;
align-items:center;
position:sticky;
top:0
}
[cmdk-overlay] {
opacity:0;
background:rgba(0,0,0,.4);
position:fixed;
inset:0;
z-index:var(--layer-overlay);
animation:opacityIn var(--transition-fast) forwards
}
[cmdk-overlay][data-state=closed] {
animation:opacityOut var(--transition-fast) forwards
}
[cmdk-dialog] {
z-index:var(--layer-portal);
position:fixed;
left:50%;
top:var(--page-top);
transform:translateX(-50%);
[cmdk] {
width:640px;
transform-origin:center center;
animation:dialogIn var(--transition-fast) forwards
}
}
[cmdk-dialog][data-state=closed] [cmdk] {
animation:dialogOut var(--transition-fast) forwards
}
[cmdk-empty] {
display:flex;
align-items:center;
justify-content:center;
height:48px;
white-space:pre-wrap
}
[basics-dialog-positioner] {
position:fixed;
top:0;
left:0;
bottom:0;
width:100vw;
max-height:calc(100 _ var(--vvh, 1vh));
pointer-events:none!important;
display:flex;
align-items:flex-start;
justify-content:center;
z-index:var(--layer-dialog);
isolation:isolate;
--top:calc(env(safe-area-inset-top, 0px) + 16px);
--bottom:calc(env(safe-area-inset-bottom, 0px) + 16px);
padding:var(--top) var(--body-margin-right) var(--bottom) var(--body-margin-left)
}
[basics-dialog-positioner][data-state=open] {
animation:nothing var(--transition-med) forwards
}
[basics-dialog-positioner][data-state=closed] {
animation:opacityOut var(--transition-med) forwards
}
[basics-dialog-positioner][data-state=open] [basics-dialog] {
animation:dialogIn var(--transition-med) forwards
}
[basics-dialog-positioner][data-state=closed] [basics-dialog] {
animation:dialogOut var(--transition-med) forwards
}
[basics-dialog] {
pointer-events:all;
max-width:100%;
max-height:100%;
display:flex;
flex-direction:column;
overflow:hidden;
z-index:var(--layer-dialog);
background:var(--bg);
border:1px solid var(--mono6);
border-radius:12px;
outline:none
}
[basics-dialog-header] {
position:relative;
display:flex;
align-items:center;
flex-shrink:0;
padding:0 32px;
height:48px;
background:var(--mono3);
font:var(--type-heading);
border-bottom:1px solid var(--mono5)
}
[basics-dialog-body] {
font:var(--type);
overflow:auto;
padding:32px
}
[basics-dialog-overlay] {
position:fixed;
inset:0;
background:var(--blackA8);
-webkit-backdrop-filter:blur(4px);
backdrop-filter:blur(4px);
z-index:var(--layer-overlay)
}
[basics-dialog-overlay][data-state=open] {
animation:opacityIn var(--transition-fast) forwards
}
[basics-dialog-overlay][data-state=closed] {
animation:opacityOut var(--transition-fast) forwards
}
@keyframes dialogIn {
0% {
opacity:.6;
transform:scale(.95)
}
to {
opacity:1;
transform:none
}
}
@keyframes dialogOut {
0% {
opacity:1;
transform:none
}
to {
opacity:0;
transform:scale(.95)
}
}
[basics-button] {
--padding:0 10px;
--height:32px;
--fontSize:14px;
background:var(--background);
outline:none;
border-radius:6px;
border:1px solid var(--border);
height:var(--height);
margin:0;
display:flex;
align-items:center;
justify-content:center;
padding:var(--padding);
-webkit-user-select:none;
-moz-user-select:none;
user-select:none;
font-family:var(--font-ui);
color:var(--color);
font-size:var(--fontSize);
line-height:var(--height);
font-weight:500;
text-decoration:none;
transition:var(--transition-fast);
transition-property:color,border-color,background
}
[basics-button]:not([basics-variant]) {
--border:var(--mono6);
--color:var(--mono11);
--background:var(--bg);
--hover-border:var(--border);
--hover-background:var(--mono4);
--hover-color:var(--color);
--active-background:var(--mono5);
--active-color:var(--mono12);
--active-border:var(--mono7)
}
[basics-button][basics-variant~=ghost] {
--border:transparent;
--color:var(--mono11);
--hover-background:var(--mono4);
--active-background:var(--mono5);
--active-color:var(--mono12);
--active-border:var(--active-background)
}
[basics-button][basics-variant-size=small] {
--height:28px;
--fontSize:13px
}
[basics-button][basics-variant-size=large] {
--height:40px;
--fontSize:16px
}
[basics-button] [basics-icon] {
width:1.25rem;
height:1.25rem
}
[basics-button] [basics-button-label]+[basics-icon],
[basics-button] [basics-icon]+[basics-button-label] {
margin-left:var(--gap)
}
@media (hover:hover) {
[basics-button]:not([data-disabled]):hover {
background:var(--hover-background,var(--background));
border-color:var(--hover-border,var(--border));
color:var(--hover-color,var(--color))
}
}
[basics-button]:not([data-disabled]):active {
background:var(--active-background,var(--background));
border-color:var(--active-border,var(--border));
color:var(--active-color,var(--color))
}
[basics-button][data-disabled] {
cursor:not-allowed;
color:var(--mono8)
}
[basics-button][data-state=focus] {
box-shadow:var(--shadow-focus)
}
[basics-button][basics-variant~=circle] {
padding:0;
border-radius:50%;
width:20px;
height:20px
}
[basics-textarea-wrapper] {
--iconSize:1em;
position:relative;
display:inline-flex;
align-items:center;
color:var(--mono11)
}
[basics-textarea] {
-webkit-appearance:none;
-moz-appearance:none;
appearance:none;
border-radius:6px;
font-family:var(--font-ui);
font-weight:400;
font-size:14px;
line-height:1.5;
border:1px solid var(--mono5);
padding:8px 12px;
margin:0;
background:none;
outline:none;
color:var(--mono12);
scroll-padding-block:8px;
caret-color:var(--mono12);
resize:none;
transition:var(--transition-fast);
transition-property:color,border-color,background
}
@supports (-webkit-touch-callout:none) {
[basics-textarea] {
font-size:16px
}
}
[basics-textarea]:not([disabled]):focus {
background:var(--mono3);
border-color:var(--mono6)
}
@media (hover:hover) {
[basics-textarea]:not([disabled]):hover {
background:var(--mono3);
border-color:var(--mono6)
}
}
[basics-textarea]::-moz-placeholder {
color:var(--mono9)
}
[basics-textarea]::placeholder {
color:var(--mono9)
}
[basics-textarea][disabled] {
cursor:not-allowed;
color:var(--mono8)
}
[basics-textarea][data-focus] {
box-shadow:var(--shadow-focus)
}
[basics-textarea][disabled]::-moz-placeholder {
color:var(--mono8)
}
[basics-textarea][disabled]::placeholder {
color:var(--mono8)
}
[basics-checkbox] {
all:unset;
background:var(--mono4);
background:none;
border:1px solid var(--mono5);
width:20px;
height:20px;
border-radius:6px;
display:flex;
align-items:center;
justify-content:center;
transition:var(--transition-fast);
transition-property:background,border-color
}
@media (hover:hover) {
[basics-checkbox]:hover {
background-color:var(--violet3)
}
}
[basics-checkbox]:focus {
box-shadow:0 0 0 2px var(--bg),0 0 0 4px var(--mono7)
}
[basics-checkbox][data-state=checked] {
background:var(--mono3);
border-color:var(--mono6)
}
[basics-checkbox-indicator] {
display:flex;
color:var(--violet11);
transition:var(--transition-fast);
transition-property:opacity,transform
}
[basics-checkbox-indicator][data-state=unchecked] {
opacity:0;
transform:scale(.98)
}
[basics-checkbox-indicator][data-state=checked] {
opacity:1
}
[basics-checkbox-label] {
padding-left:12px;
line-height:1;
color:var(--mono9);
transition:var(--transition-fast);
transition-property:color
}
[basics-checkbox][data-state=checked]~[basics-checkbox-label] {
color:var(--mono12)
}
[basics-sup] {
color:var(--indigo);
font-weight:500;
font-family:var(--font-ui)
}
:root {
--font-fallback:-apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
--font-display:"Inter",var(--font-fallback);
--font-ui:"Inter",var(--font-fallback);
--font-sans:"Sohne",var(--font-fallback);
--font-mono:"Menlo",monospace;
--font-serif:"Newsreader","Signifier","Times",serif;
--basics-gap:0.5rem;
--gap-s:4px;
--gap:8px;
--gap-2x:16px;
--gap-3x:24px;
--gap-4x:32px;
--gap-6x:48px;
--gap-8x:64px;
--gap-12x:72px;
--gap-16x:128px;
--type:var(--text) /var(--leading) var(--font-sans);
--type-body:var(--type);
--type-code:13px/1.7 var(--font-mono);
--type-italic:400 italic calc(1em + 1px) /normal var(--font-serif);
--type-s:var(--text-s) /var(--leading-s) var(--font-sans);
--type-l:var(--text-l) /var(--leading-l) var(--font-sans);
--type-heading:500 var(--text) /var(--leading) var(--font-display);
--type-button:400 14px/var(--height,normal) var(--font-sans);
--type-heading-l:500 var(--text-l) /var(--leading-l) var(--font-display);
--leading-xxl:54px;
--leading-xl:40px;
--leading-l:32px;
--leading:28px;
--leading-s:20px;
--leading-xs:18px;
--text-2xl:30px;
--text-xl:24px;
--text-l:20px;
--text:16px;
--text-s:14px;
--text-xs:12px;
--text-xxs:10px;
--kerning-l:-0.33px;
--radius-xl:14px;
--radius-l:10px;
--radius:8px;
--radius-s:5px;
--radius-xs:3px;
--transition-instant:0ms;
--transition-fastest:80ms;
--transition-fast:100ms;
--transition-med:160ms;
--transition-xx:240ms;
--transition-xxl:320ms;
--transition-long:480ms;
--transition-slow:1200ms;
--layer-tooltip:600;
--layer-dialog:500;
--layer-popover:400;
--layer-toasts:300;
--layer-portal:200;
--layer-overlay:100;
--layer-1:1;
--layer-2:2;
--layer-3:3;
--layer-4:4;
--layer-5:5;
--shadow-s:0 2px 20px 1px var(--shadow-color);
--noise-1:url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
--scrollbar-size:16px;
--scrollbar-size-min:44px;
--scrollbar-color:var(--mono6);
--transparent:transparent;
--transparent-white:hsla(0,0%,100%,0);
--mask-vertical:linear-gradient(to bottom,var(--mask-hidden) 0px,var(--mask-visible) var(--mask-size),var(--mask-visible) calc(100% - var(--mask-size)),var(--mask-hidden) 100%);
--mask-visible:#000;
--mask-hidden:transparent;
--mask-invisible:transparent;
--border-thin:1px;
--ease-in-quad:cubic-bezier(0.55,0.085,0.68,0.53);
--ease-in-cubic:cubic-bezier(0.55,0.055,0.675,0.19);
--ease-in-quart:cubic-bezier(0.895,0.03,0.685,0.22);
--ease-in-quint:cubic-bezier(0.755,0.05,0.855,0.06);
--ease-in-expo:cubic-bezier(0.95,0.05,0.795,0.035);
--ease-in-circ:cubic-bezier(0.6,0.04,0.98,0.335);
--ease-out-quad:cubic-bezier(0.25,0.46,0.45,0.94);
--ease-out-cubic:cubic-bezier(0.215,0.61,0.355,1);
--ease-out-quart:cubic-bezier(0.165,0.84,0.44,1);
--ease-out-quint:cubic-bezier(0.23,1,0.32,1);
--ease-out-expo:cubic-bezier(0.19,1,0.22,1);
--ease-out-circ:cubic-bezier(0.075,0.82,0.165,1);
--ease-in-out-quad:cubic-bezier(0.455,0.03,0.515,0.955);
--ease-in-out-cubic:cubic-bezier(0.645,0.045,0.355,1);
--ease-in-out-quart:cubic-bezier(0.77,0,0.175,1);
--ease-in-out-quint:cubic-bezier(0.86,0,0.07,1);
--ease-in-out-expo:cubic-bezier(1,0,0,1);
--ease-in-out-circ:cubic-bezier(0.785,0.135,0.15,0.86)
}
@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi) {
:root {
--border-thin:0.5px
}
}
::-moz-selection {
background:var(--selection);
text-shadow:none;
text-decoration-color:var(--mono9)
}
::selection {
background:var(--selection);
text-shadow:none;
-webkit-text-decoration-color:var(--mono9);
text-decoration-color:var(--mono9)
}
[data-focus] {
--focus-color:var(--mono7);
--shadow-focus:0 0 0 2px var(--bg),0 0 0 4px var(--focus-color)
}

- {
  scrollbar-width:thin;
  scrollbar-color:var(--mono5) transparent
  }
  ::-webkit-scrollbar {
  width:var(--scrollbar-size);
  height:var(--scrollbar-size)
  }
  ::-webkit-scrollbar-thumb {
  min-height:var(--scrollbar-size-min);
  min-width:var(--scrollbar-size-min);
  background-color:var(--scrollbar-color);
  border-radius:var(--scrollbar-size);
  border:5px solid transparent;
  background-clip:padding-box
  }
  @media (hover:hover) {
  ::-webkit-scrollbar-thumb:hover {
  --scrollbar-color:var(--mono7)
  }
  }
  ::-webkit-scrollbar-thumb:active {
  --scrollbar-color:var(--mono9)
  }
  ::-webkit-scrollbar-track {
  background:transparent
  }
  ::-webkit-scrollbar-button,
  ::-webkit-scrollbar-corner {
  display:none
  }
  ::-webkit-resizer {
  display:none
  }
  [data-scrollbar=hide] {
  -ms-overflow-style:none;
  overflow:-moz-scrollbars-none;
  scrollbar-width:none
  }
  [data-scrollbar=hide]::-webkit-scrollbar {
  display:none
  }
  [craft-hide-scrollbar] {
  scrollbar-width:none;
  -ms-overflow-style:none
  }
  [craft-hide-scrollbar]::-webkit-scrollbar {
  height:0;
  width:0
  }
  [craft-sr-only] {
  position:absolute;
  width:1px;
  height:1px;
  padding:0;
  margin:-1px;
  overflow:hidden;
  clip:rect(0,0,0,0);
  white-space:nowrap;
  border-width:0
  }
  [craft-center] {
  align-items:center;
  justify-content:center
  }
  [craft-full-width] {
  position:relative;
  left:calc(50% + var(--edge, 0px));
  margin-left:-50vw;
  width:calc(100vw - (2 _ var(--edge, 0px)))
  }
  .tabs {
  --height:32px;
  position:relative;
  display:inline-flex
  }
  .tabs,
  .tabs .tab {
  align-items:center
  }
  .tabs .tab {
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  border:0;
  font-family:var(--font-sans);
  cursor:pointer;
  height:var(--height);
  line-height:var(--height);
  padding:0 16px;
  display:flex
  }
  .tabs .indicator {
  pointer-events:none;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:#fff;
  mix-blend-mode:exclusion;
  -webkit-clip-path:inset(0 calc(100% - 51px) 0 0 round var(--height));
  clip-path:inset(0 calc(100% - 51px) 0 0 round var(--height));
  z-index:0;
  transition:-webkit-clip-path .3s ease;
  transition:clip-path .3s ease;
  transition:clip-path .3s ease,-webkit-clip-path .3s ease
  }
  [craft-tabs-wrapper] {
  --ct-height:32px;
  --ct-active-bg:#1e90ff;
  --ct-active-fg:#fff;
  position:relative
  }
  @media (prefers-color-scheme:dark) {
  [craft-tabs-wrapper] {
  --ct-active-bg:#ff9f0a;
  --ct-active-fg:#000
  }
  }
  [craft-tabs] {
  display:flex;
  flex-wrap:wrap
  }
  [craft-tabs] [craft-tab]:first-child {
  background:var(--ct-active-bg);
  color:var(--ct-active-fg)
  }
  [craft-tabs-hidden] {
  display:flex;
  flex-wrap:wrap;
  width:100%;
  left:0;
  top:0;
  position:absolute;
  pointer-events:none;
  z-index:1;
  background:var(--ct-active-bg);
  -webkit-clip-path:inset(0 100% 0 0);
  clip-path:inset(0 100% 0 0);
  will-change:clip-path
  }
  [craft-tabs-hidden] [craft-tab] {
  background:var(--ct-active-bg);
  color:var(--ct-active-fg);
  border-radius:0
  }
  [craft-tab],
  [craft-tabs-wrapper][data-modified] [craft-tabs] [craft-tab]:first-child {
  background:none;
  color:var(--fg)
  }
  [craft-tab] {
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  outline:none;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  border:0;
  border-radius:var(--ct-height);
  font-family:var(--font-sans);
  cursor:pointer;
  height:var(--ct-height);
  line-height:var(--ct-height);
  padding:0 16px;
  display:flex;
  align-items:center
  }
  .codeblock {
  border:1px solid var(--mono3);
  border-radius:var(--radius);
  overflow:hidden;
  padding:var(--padding) 0;
  position:relative;
  background:var(--bg);
  width:60%;
  margin:0 auto;
  --padding:4px;
  --gradient-start:39px;
  --gradient-size:24px;
  --line-number-width:32px;
  --line-height:22px
  }
  .codeblock [craft-codeblock-highlights] {
  pointer-events:none;
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none
  }
  .codeblock [craft-codeblock-highlights] div {
  position:absolute;
  left:0;
  width:100%;
  height:var(--line-height);
  background:var(--mono3);
  top:calc((var(--line-index, 0) - 1) _ var(--line-height) + var(--padding))
  }
  .codeblock [craft-codeblock-line-numbers] {
  position:absolute;
  left:0;
  top:var(--padding);
  background:var(--bg);
  z-index:1
  }
  .codeblock [craft-codeblock-line-numbers] div {
  text-align:right;
  font-size:13px;
  line-height:var(--line-height);
  height:var(--line-height);
  width:40px;
  padding-right:8px;
  color:var(--mono11)
  }
  .codeblock [craft-codeblock-line-numbers] div[data-highlight] {
  background:var(--mono3)
  }
  .codeblock [craft-codeblock-lines] {
  position:relative;
  overflow-x:scroll;
  scrollbar-width:none;
  -ms-overflow-style:none;
  display:block;
  font-family:var(--font-mono);
  color:var(--mono12);
  font-size:13px;
  line-height:var(--line-height);
  margin-left:32px;
  padding-left:16px;
  background:var(--bg);
  display:flex
  }
  .codeblock [craft-codeblock-lines]>span {
  display:block;
  position:sticky;
  left:-8px;
  min-width:24px;
  --direction:to right;
  background:linear-gradient(var(--direction),var(--bg),transparent);
  -webkit-backdrop-filter:blur(5px);
  backdrop-filter:blur(5px);
  -webkit-mask-image:linear-gradient(var(--direction),#000 25%,transparent);
  mask-image:linear-gradient(var(--direction),#000 25%,transparent);
  opacity:.95
  }
  .codeblock [craft-codeblock-lines]>span:nth-of-type(2) {
  --direction:to left;
  left:unset;
  right:0
  }
  .codeblock [craft-codeblock-lines] div {
  min-height:var(--line-height)
  }
  .codeblock [craft-codeblock-lines] div[data-highlight=true],
  .codeblock [craft-codeblock-lines] div[data-highlight=true]:before {
  background:var(--mono3)
  }
  .button {
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  border-radius:var(--radius);
  background:var(--bg);
  border:1px solid var(--mono6);
  font-family:var(--font-sans);
  color:var(--mono12);
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  height:40px;
  padding:0 12px;
  margin:0;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  outline:none;
  --offset:2px;
  --color:var(--mono7);
  --width:2px
  }
  .button[data-ring=outline] {
  transition:var(--transition-fast);
  transition-property:outline-offset;
  outline-offset:0
  }
  .button[data-ring=outline]:focus {
  outline:var(--width) solid var(--color);
  outline-offset:var(--offset)
  }
  @media (hover:hover) {
  .button[data-ring=outline]:hover {
  outline:var(--width) solid var(--color);
  outline-offset:var(--offset)
  }
  }
  .button[data-ring=box-shadow] {
  transition:var(--transition-fast);
  transition-property:box-shadow
  }
  .button[data-ring=box-shadow]:focus {
  box-shadow:0 0 0 var(--offset) var(--bg),0 0 0 calc(var(--offset) + var(--width)) var(--color)
  }
  @media (hover:hover) {
  .button[data-ring=box-shadow]:hover {
  box-shadow:0 0 0 var(--offset) var(--bg),0 0 0 calc(var(--offset) + var(--width)) var(--color)
  }
  }
  .button[data-ring=pseudo]:focus:after {
  opacity:1;
  transform:none
  }
  @media (hover:hover) {
  .button[data-ring=pseudo]:hover:after {
  opacity:1;
  transform:none
  }
  }
  .button[data-ring=pseudo]:after {
  content:"";
  opacity:0;
  transform:scale(.9);
  transform-origin:center center;
  transition:var(--transition-fast);
  transition-property:opacity,transform;
  box-sizing:content-box;
  display:block;
  height:100%;
  width:100%;
  position:absolute;
  border:var(--width) solid var(--color);
  border-radius:calc(var(--radius) + 4px);
  padding:calc(var(--offset) + var(--width))
  }
  [craft-carousel] {
  position:relative;
  display:flex;
  align-items:center;
  scroll-snap-type:x mandatory;
  overflow-x:auto;
  overflow-y:hidden;
  -webkit-overflow-scrolling:touch;
  padding-bottom:var(--gap-4x);
  padding-left:var(--body-margin-left);
  padding-right:var(--body-margin-right)
  }
  [craft-carousel]:before {
  content:"";
  min-width:calc((100vw - var(--content-width)) / 2 - var(--body-margin-left))
  }
  [craft-carousel]:after {
  content:"\00a0\00a0";
  min-width:max(24px,calc((100vw - var(--content-width)) / 2 - var(--body-margin-right)))
  }
  [craft-carousel-figure] {
  scroll-snap-align:center;
  display:flex;
  flex-direction:column
  }
  [craft-carousel-figure] figcaption {
  font-size:var(--text-s);
  line-height:var(--leading-s);
  color:var(--mono11);
  margin-top:var(--gap)
  }
  [craft-carousel-figure]+[craft-carousel-figure] {
  margin-left:var(--gap-2x)
  }
  [craft-carousel-figure] div {
  transform:scale(.95);
  filter:grayscale(1) opacity(40%) blur(2px);
  transition:.4s;
  transition-property:transform,filter
  }
  [craft-carousel-figure][data-state=active] div {
  transform:none;
  filter:none
  }
  [craft-carousel-figure] img {
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  border-radius:var(--radius-s);
  background-color:var(--mono2);
  border:none;
  display:block;
  max-width:calc(100vw - var(--body-margin-left) - var(--body-margin-right) _ 2);
  max-height:min(calc(100vh - var(--header-height)),600px);
  width:auto;
  height:auto
  }
  [craft-carousel-figure] img:-moz-broken {
  border:1px solid transparent
  }
  [craft-carousel-figure] {
  cursor:w-resize
  }
  [craft-carousel-figure][data-state=active] {
  cursor:default
  }
  [craft-carousel-figure][data-state=active]~[craft-carousel-figure] {
  cursor:e-resize
  }
  [craft-window] {
  --cw-radius:10px;
  --cw-bar-height:53px;
  --cw-side-padding:16px;
  --cw-traffic-space:calc(52px + 16px + 16px);
  border-radius:var(--cw-radius);
  border:1px solid var(--mono5);
  overflow:hidden;
  position:relative;
  display:flex
  }
  [craft-window-body] {
  flex-grow:1;
  max-width:100%;
  background:var(--bg)
  }
  [craft-window-body-content] {
  padding:var(--cw-side-padding);
  height:100%;
  overflow:auto;
  overscroll-behavior:contain
  }
  [craft-window-bar] {
  max-width:100%;
  display:flex;
  align-items:center;
  height:var(--cw-bar-height);
  padding:0 var(--cw-side-padding);
  border-bottom:1px solid var(--mono5);
  white-space:nowrap;
  background:var(--bg);
  position:relative;
  border-radius:var(--cw-radius) var(--cw-radius) 0 0;
  transition:var(--transition-med);
  transition-property:padding-left
  }
  [craft-window-sidebar][data-state=hidden]+[craft-window-bar] {
  padding-left:var(--cw-traffic-space)
  }
  [craft-window-bar-input-label] {
  display:flex;
  align-items:center;
  border-radius:6px;
  padding:0 8px;
  box-shadow:0 0 0 1px var(--mono5);
  transition:var(--transition-fast);
  transition-property:box-shadow;
  max-width:100%
  }
  [craft-window-bar-input-label]:focus-within {
  box-shadow:0 0 0 2px var(--mono8)
  }
  [craft-window-bar-input-label]:before {
  content:"";
  width:16px;
  height:16px;
  flex-shrink:0;
  display:inline-block;
  background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.25 11C17.25 12.6835 16.5853 14.2103 15.5025 15.3347C14.3647 16.5163 12.7686 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11Z' stroke='%23888888' stroke-width='1.5'/%3E%3Cpath d='M16 16L20.5 20.5' stroke='%23888888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
  }
  [craft-window-bar-input] {
  width:100%;
  display:block;
  position:relative;
  border:0;
  background:none;
  color:var(--mono11);
  height:32px;
  padding:0 8px;
  font-size:var(--text-s);
  outline:none
  }
  [craft-window-bar-input]:focus::-moz-placeholder {
  color:var(--mono8)
  }
  [craft-window-bar-input]:focus::placeholder {
  color:var(--mono8)
  }
  [craft-window-bar-input] {
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap
  }
  [craft-window-bar-input]::-moz-placeholder {
  -moz-user-select:none;
  user-select:none;
  -moz-transition:color var(--transition-fast);
  transition:color var(--transition-fast);
  color:var(--mono10)
  }
  [craft-window-bar-input]::placeholder {
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  transition:color var(--transition-fast);
  color:var(--mono10)
  }
  [craft-window-bar-title] {
  font-size:14px;
  font-family:var(--font-display);
  font-weight:500
  }
  [craft-window-traffic] {
  position:absolute;
  top:calc(var(--cw-bar-height) / 2);
  transform:translateY(-50%);
  left:var(--cw-side-padding);
  display:flex;
  align-items:center;
  gap:8px;
  z-index:1
  }
  [craft-window-traffic] div {
  width:12px;
  height:12px;
  border-radius:50%;
  background:var(--traffic-bg,var(--mono8))
  }
  [craft-window-sidebar][data-state=hidden]+[craft-window-body] [craft-window-bar] {
  padding-left:calc(52px + 16px + 16px)
  }
  [craft-window-sidebar] {
  --cw-sidebar-bg:var(--mono2);
  --cw-sidebar-width:200px;
  margin-top:var(--cw-bar-height);
  flex-shrink:0;
  width:var(--cw-sidebar-width);
  border-right:1px solid var(--mono5);
  background:var(--cw-sidebar-bg);
  position:relative;
  transition:var(--transition-med);
  transition-property:margin-right,transform
  }
  [craft-window-sidebar] div {
  height:100%;
  overflow:auto;
  overscroll-behavior:contain;
  padding-bottom:var(--cw-side-padding)
  }
  [craft-window-sidebar][data-state=hidden] {
  margin-right:calc(-1 _ var(--cw-sidebar-width));
  transform:translateX(-100%)
  }
  [craft-window-sidebar] ul {
  list-style-type:none;
  padding:0;
  margin:0;
  padding:0 calc(var(--cw-side-padding) / 2)
  }
  [craft-window-sidebar] ul li {
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  height:32px;
  font-size:14px;
  border-radius:var(--radius-s);
  width:100%;
  display:flex;
  align-items:center;
  padding:0 calc(var(--cw-side-padding) / 2);
  color:var(--mono11);
  cursor:pointer
  }
  [craft-window-sidebar] ul li[aria-selected=true] {
  background:var(--mono5);
  color:var(--mono12)
  }
  [craft-window-sidebar-cover] {
  display:block;
  position:absolute;
  transform:translateY(-100%);
  top:0;
  left:0;
  height:var(--cw-bar-height);
  width:var(--cw-sidebar-width);
  background:var(--cw-sidebar-bg);
  border-right:1px solid var(--mono5)
  }
  [craft-window-tabs] {
  display:flex;
  align-items:center;
  height:28px;
  background:var(--mono3);
  color:var(--mono9);
  border-bottom:1px solid var(--mono5);
  font-size:var(--text-xs)
  }
  [craft-window-tab] {
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  border:none;
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  cursor:pointer;
  height:100%;
  flex:1 1;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:var(--transition-fast);
  transition-property:color,background
  }
  [craft-window-tab][data-state=active] {
  color:var(--fg);
  background:var(--bg)
  }
  [craft-window-tab]+[craft-window-tab] {
  border-left:1px solid var(--mono5)
  }
  [craft-cube] {
  font-size:3rem;
  line-height:1;
  position:relative
  }
  @media (hover:hover) {
  [craft-cube]:hover {
  [craft-cube-letter] {
  transform:translateY(-100%) rotateX(-90deg)
  }
  }
  }
  @media (hover:hover) {
  [craft-cube]:hover [craft-cube-bottom] {
  transform:none
  }
  }
  [craft-cube] div {
  display:flex
  }
  [craft-cube-shadow] {
  position:absolute;
  left:0;
  top:0
  }
  [craft-cube-letter] {
  will-change:transform;
  transform-origin:bottom;
  transform-style:preserve-3d;
  transition:transform .5s;
  transition-delay:calc(var(--index) _ 50ms)
  }
  [craft-cube-bottom] {
  transform-origin:top;
  font-family:var(--font-serif);
  line-height:4rem;
  transform:translateY(100%) rotateX(-90deg)
  }
  [craft-grain] {
  content:"";
  position:fixed;
  top:-100vh;
  bottom:-100vh;
  left:-100vw;
  right:-100vw;
  z-index:calc(var(--layer-header) + 1);
  pointer-events:none;
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  opacity:1;
  background-image:var(--grain4);
  background-size:40vw 40vw;
  --grain1:url("data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' opacity='0.5' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  --grain2:url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  --grain3:url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  --grain4:url("data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  --grain5:url("data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
  }
  [craft-figure] {
  display:flex;
  flex-direction:column;
  align-items:center
  }
  [craft-figure][data-state=closed] {
  cursor:zoom-in
  }
  [craft-figure][data-state=open] {
  cursor:zoom-out
  }
  [craft-figure] figcaption {
  font-size:var(--text-s);
  line-height:var(--leading-s);
  color:var(--mono11);
  margin-top:var(--gap);
  transform-origin:left center;
  transition:var(--transition-long);
  transition-property:transform
  }
  [craft-figure] div {
  transform-origin:center top;
  transition:var(--transition-long);
  transition-property:margin,transform
  }
  [craft-image] {
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  border-radius:var(--radius-s);
  background-color:var(--mono2);
  border:none;
  display:block;
  max-width:100%;
  width:auto;
  height:auto
  }
  [craft-image]:-moz-broken {
  border:1px solid transparent
  }
  [craft-timeline] {
  --timeline-sidebar-width:250px;
  --timeline-row-height:48px;
  --timeline-header-height:60px;
  --timeline-header-cell-width:300px;
  position:relative;
  border:1px solid var(--mono5)
  }
  [timeline-scroller] {
  max-height:400px;
  position:relative;
  overflow:auto;
  overscroll-behavior:contain;
  will-change:scroll-position;
  scrollbar-width:none
  }
  [timeline-scroller]::-webkit-scrollbar {
  width:0;
  height:0
  }
  [timeline-wrapper] {
  display:flex;
  flex-direction:column;
  width:-moz-fit-content;
  width:fit-content
  }
  [timeline-body] {
  display:flex;
  flex-direction:column;
  margin-top:var(--timeline-header-height);
  transform:rotate(.000001deg)
  }
  [timeline-body]:before {
  content:"";
  position:fixed;
  top:0;
  left:var(--timeline-sidebar-width);
  z-index:0;
  width:calc(100% - var(--timeline-sidebar-width));
  height:100%;
  --lines-gap:calc(60px);
  background-image:repeating-linear-gradient(to right,var(--mono2) 0,var(--mono2) var(--lines-gap),transparent var(--lines-gap),transparent calc(var(--lines-gap) _ 2))
  }
  [timeline-header] {
  z-index:1;
  display:flex;
  position:sticky;
  top:0;
  margin-top:calc(-1 _ var(--timeline-header-height));
  width:-moz-fit-content;
  width:fit-content;
  margin-left:var(--timeline-sidebar-width)
  }
  [timeline-header-cell] {
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:var(--timeline-header-height);
  min-width:var(--timeline-header-cell-width);
  background:var(--bg);
  border-bottom:1px solid var(--mono5);
  font-size:var(--text-s);
  box-shadow:inset -1px 0 0 var(--mono5)
  }
  [timeline-month] {
  align-self:flex-start;
  position:sticky;
  padding:0 var(--gap);
  color:var(--mono11);
  left:calc(var(--timeline-sidebar-width) + var(--gap-2x))
  }
  [timeline-days] {
  margin-top:var(--gap);
  display:flex;
  align-items:center;
  color:var(--mono10)
  }
  [timeline-days] div {
  width:60px;
  text-align:center
  }
  [timeline-row] {
  scroll-snap-align:end;
  display:flex;
  align-items:center;
  z-index:1
  }
  [timeline-row]+[timeline-row] [timeline-row-header] {
  border-top:1px solid var(--mono5)
  }
  [timeline-row-header] {
  z-index:1;
  position:sticky;
  flex:0 0 var(--timeline-sidebar-width);
  height:var(--timeline-row-height);
  font-size:var(--text-s);
  color:var(--mono11)
  }
  [timeline-row-header],
  [timeline-top-left] {
  left:0;
  width:var(--timeline-sidebar-width);
  display:flex;
  align-items:center;
  padding:0 var(--gap-2x);
  border-right:1px solid var(--mono5);
  background:var(--bg)
  }
  [timeline-top-left] {
  z-index:2;
  position:absolute;
  top:0;
  height:var(--timeline-header-height);
  border-bottom:1px solid var(--mono5)
  }
  [timeline-item] {
  height:36px;
  border-radius:var(--radius);
  background:var(--bg);
  border:1px solid var(--mono5);
  cursor:grab;
  font-size:var(--text-s);
  position:relative;
  display:flex;
  align-items:center;
  padding:0 var(--gap-2x);
  white-space:nowrap;
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  left:var(--left);
  width:var(--width,180px);
  will-change:left,width
  }
  [timeline-item] span {
  position:sticky;
  left:calc(var(--timeline-sidebar-width) + var(--gap-2x))
  }
  [timeline-item-handle] {
  position:absolute;
  height:36px;
  width:36px;
  cursor:col-resize;
  display:flex;
  align-items:center;
  justify-content:center
  }
  [timeline-item-handle]:after {
  content:"";
  display:block;
  width:2px;
  height:80%;
  border-radius:2px;
  background:var(--mono7);
  opacity:0;
  transform:none;
  transition:var(--transition-med);
  transition-property:opacity,transform;
  transition-delay:.2s
  }
  @media (hover:hover) {
  [timeline-item-handle]:hover:after {
  opacity:1
  }
  }
  [timeline-item-handle]:first-child {
  left:-18px
  }
  @media (hover:hover) {
  [timeline-item-handle]:first-child:hover:after {
  transform:translateX(-10px)
  }
  }
  [timeline-item-handle]:last-child {
  right:-18px
  }
  @media (hover:hover) {
  [timeline-item-handle]:last-child:hover:after {
  transform:translateX(10px)
  }
  }
  [craft-lyrics] {
  border:1px solid var(--mono5);
  border-radius:var(--raidus);
  width:100%;
  font-size:var(--text-xl);
  line-height:var(--leading-xl)
  }
  [craft-lyrics] div {
  overflow-y:auto;
  overscroll-behavior:contain;
  height:400px;
  padding:var(--gap-2x);
  padding-bottom:var(--gap-4x);
  -webkit-mask-image:linear-gradient(356deg,transparent,rgba(0,0,0,.1) 20px,#000 60px);
  mask-image:linear-gradient(356deg,transparent,rgba(0,0,0,.1) 20px,#000 60px)
  }
  [craft-fade]>_ {
  transition:var(--transition-long);
  transition-property:opacity,transform
  }
  [craft-center] {
  display:flex;
  flex-wrap:wrap;
  gap:16px
  }
  [craft-center-group] {
  border-radius:20px;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr 1fr;
  grid-gap:12px;
  gap:12px;
  padding:12px;
  background:hsla(0,0%,100%,.1);
  -webkit-backdrop-filter:blur(10px) brightness(50%);
  backdrop-filter:blur(10px) brightness(50%);
  transform-origin:center right;
  transition:var(--transition-long);
  transition-property:transform;
  will-change:transform
  }
  [craft-center-group]>div {
  width:64px;
  height:64px;
  border-radius:12px;
  background:var(--mono8);
  display:flex;
  align-items:center;
  justify-content:center;
  transition:var(--transition-long);
  transition-property:opacity;
  will-change:opacity
  }
  [craft-center][data-collapsed=true] {
  [craft-center-group]:nth-child(n+2) div {
  opacity:0
  }
  }
  [craft-scroll-marker] {
  --scroll-marker-width:6px;
  --scroll-marker-height:64px;
  position:fixed;
  right:var(--gap-4x);
  top:50%;
  transform:translateY(-50%);
  height:var(--scroll-marker-height);
  background:var(--mono7)
  }
  [craft-scroll-marker-thumb],
  [craft-scroll-marker] {
  width:var(--scroll-marker-width);
  border-radius:var(--scroll-marker-width)
  }
  [craft-scroll-marker-thumb] {
  background:var(--mono11)
  }
  html::-webkit-scrollbar {
  width:0;
  height:0
  }
  [craft-video] {
  outline:none;
  display:block;
  max-width:100%;
  border-radius:var(--radius-s);
  background:var(--mono3);
  cursor:pointer
  }
  [craft-video-figure] figcaption {
  font-size:var(--text-s);
  line-height:var(--leading-s);
  color:var(--mono11);
  margin-top:var(--gap)
  }
  [craft-video-wrapper] {
  position:relative
  }
  @media (hover:hover) {
  [craft-video-wrapper]:hover [craft-video-controls] {
  transform:none;
  opacity:1
  }
  }
  [craft-video-figure][data-js=true] [craft-video-controls] {
  display:flex
  }
  [craft-video-controls] {
  --height:36px;
  display:none;
  position:absolute;
  bottom:var(--gap-2x);
  left:var(--gap-2x);
  right:var(--gap-2x);
  height:var(--height);
  border-radius:var(--height);
  display:flex;
  align-items:center;
  gap:var(--gap);
  background:rgba(0,0,0,.4);
  -webkit-backdrop-filter:blur(10px) brightness(.8);
  backdrop-filter:blur(10px) brightness(.8);
  padding:0 var(--gap);
  transform:translateY(40%);
  opacity:0;
  transition:var(--transition-fast);
  transition-property:opacity,transform
  }
  [craft-video-controls] button {
  cursor:pointer;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  border:none;
  font-family:var(--font-sans);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:6px;
  color:#fff;
  border-radius:var(--radius-s);
  transition:var(--transition-fast);
  transition-property:color,background
  }
  @media (hover:hover) {
  [craft-video-controls] button:hover {
  background:hsla(0,0%,100%,.15)
  }
  }
  [craft-video-controls] button[data-state=inactive] {
  color:hsla(0,0%,100%,.3)
  }
  [craft-video-progress] {
  --click-padding:-10px;
  position:relative;
  background:hsla(0,0%,100%,.3);
  height:3px;
  border-radius:3px;
  overflow:hidden;
  width:100%;
  cursor:pointer
  }
  [craft-video-progress]:after,
  [craft-video-progress]:before {
  content:"";
  cursor:pointer;
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  position:absolute;
  height:calc(-1 _ var(--click-padding));
  width:100%
  }
  [craft-video-progress]:before {
  top:var(--click-padding)
  }
  [craft-video-progress]:after {
  bottom:var(--click-padding)
  }
  [craft-video-progress-indicator] {
  position:relative;
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  pointer-events:none;
  background:#fff;
  height:100%;
  width:100%;
  border-radius:3px;
  transform:scaleX(.01);
  transform-origin:0 0;
  transition:var(--transition-med) linear;
  transition-property:transform
  }
  [craft-degrees] {
  --knob-size:32px;
  width:var(--knob-size);
  height:var(--knob-size);
  background:var(--mono5);
  border-radius:50%;
  position:relative;
  overflow:hidden;
  cursor:move;
  flex-shrink:0;
  margin-right:var(--gap)
  }
  [craft-degrees]:after {
  content:"";
  background:var(--mono12);
  width:2px;
  height:2px;
  position:absolute;
  left:calc(50% - 1px);
  top:calc(50% - 1px);
  border-radius:2px
  }
  [craft-degrees-indicator] {
  --height:16px;
  --width:2px;
  position:absolute;
  left:calc(50% - (var(--width) / 2));
  bottom:0;
  height:var(--height);
  width:var(--width);
  border-radius:var(--width);
  background:var(--mono12);
  will-change:transform;
  transform-origin:center calc(-1 _ (var(--knob-size) / 2 - var(--height)))
  }
  [craft-degrees-form] {
  display:inline-flex;
  align-items:center;
  background:var(--mono3);
  border-radius:var(--radius);
  padding:var(--gap)
  }
  [craft-degrees-form] input::-webkit-inner-spin-button,
  [craft-degrees-form] input::-webkit-outer-spin-button {
  -webkit-appearance:none;
  margin:0
  }
  [craft-degrees-form] input {
  color:var(--fg);
  outline:none;
  padding:0 var(--gap);
  width:48px;
  text-align:center;
  -moz-appearance:textfield;
  border:none;
  background:none
  }
  [craft-degrees-dragger] {
  cursor:ew-resize;
  height:2px;
  border-radius:2px;
  width:100%;
  background:var(--mono8);
  margin-top:var(--gap);
  transition:var(--transition-fast);
  transition-property:background
  }
  @media (hover:hover) {
  [craft-degrees-dragger]:hover {
  background:var(--mono12)
  }
  }
  [craft-fake-cursor] {
  display:none;
  pointer-events:none;
  position:fixed;
  top:0;
  left:-15.5px;
  will-change:transform
  }
  [craft-reader] {
  position:fixed;
  outline:none;
  z-index:var(--layer-portal);
  animation:opacityIn var(--transition-fast) forwards
  }
  [craft-reader][data-state=closed] {
  animation:opacityOut var(--transition-fast) forwards
  }
  [craft-reader-overlay] {
  opacity:0;
  background:rgba(0,0,0,.4);
  position:fixed;
  inset:0;
  z-index:var(--layer-overlay);
  animation:readerOverlayIn var(--transition-fast) forwards
  }
  [craft-reader-overlay][data-state=closed] {
  animation:readerOverlayOut var(--transition-fast) forwards
  }
  [craft-reader-word] {
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  height:120px;
  width:60vw;
  background:var(--mono2);
  border:1px solid var(--mono5);
  color:var(--mono12);
  font-size:3rem;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:var(--radius-l);
  animation:opacityIn var(--transition-fast) forwards;
  [data-state=closed] & {
  animation:opacityOut var(--transition-fast) forwards
  }
  }
  [craft-reader-bar] {
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  height:64px;
  background:var(--mono2);
  border-top:1px solid var(--mono5);
  animation:readerBarIn var(--transition-fast) forwards;
  [data-state=closed] & {
  animation:readerBarOut var(--transition-fast) forwards
  }
  }
  [craft-reader-bar]>div {
  height:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin:0 auto;
  max-width:var(--content-width)
  }
  [craft-reader-progress] {
  width:200px;
  background:var(--mono5);
  height:6px;
  border-radius:6px
  }
  [craft-reader-progress] div {
  height:100%;
  border-radius:6px;
  background:var(--mono12)
  }
  [craft-reader-headings] {
  display:flex;
  flex-direction:column;
  gap:4px;
  font-size:var(--text-s);
  color:var(--mono11);
  height:100%;
  overflow:auto;
  padding:8px 0;
  -webkit-mask-image:linear-gradient(180deg,transparent 0,#000 8px,#000 calc(100% - 8px),transparent);
  mask-image:linear-gradient(180deg,transparent 0,#000 8px,#000 calc(100% - 8px),transparent)
  }
  [craft-reader-headings] a {
  cursor:pointer;
  color:var(--mono11);
  transition:var(--transition-fast);
  transition-property:color
  }
  [craft-reader-headings] a[data-state=active] {
  color:var(--mono12)
  }
  @media (hover:hover) {
  [craft-reader-headings] a:hover {
  color:var(--mono12)
  }
  }
  [craft-reader-range] {
  outline:none;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  width:100%;
  background:transparent
  }
  [craft-reader-range]::-webkit-slider-thumb {
  -webkit-appearance:none;
  appearance:none;
  cursor:grab;
  width:14px;
  height:14px;
  border-radius:50%;
  background:var(--fg);
  transform:translateY(-5px)
  }
  [craft-reader-range]::-webkit-slider-thumb:active {
  cursor:grabbing
  }
  [craft-reader-range]::-webkit-slider-runnable-track {
  width:100%;
  height:4px;
  border-radius:4px;
  cursor:pointer;
  background:var(--mono7)
  }
  [craft-reader-bar] label {
  display:block;
  font-size:var(--text-s);
  margin-top:var(--gap)
  }
  @keyframes readerBarIn {
  0% {
  transform:translateY(100%)
  }
  to {
  transform:none
  }
  }
  @keyframes readerBarOut {
  0% {
  transform:none
  }
  to {
  transform:translateY(10%)
  }
  }
  @keyframes readerOverlayIn {
  0% {
  opacity:0;
  -webkit-backdrop-filter:none;
  backdrop-filter:none
  }
  to {
  opacity:1;
  -webkit-backdrop-filter:blur(2px);
  backdrop-filter:blur(2px)
  }
  }
  @keyframes readerOverlayOut {
  0% {
  opacity:1;
  -webkit-backdrop-filter:blur(2px);
  backdrop-filter:blur(2px)
  }
  to {
  opacity:0;
  -webkit-backdrop-filter:none;
  backdrop-filter:none
  }
  }
  [craft-baggage] {
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px
  }
  [craft-baggage-copy],
  [craft-baggage-paste] {
  flex:1 1;
  height:140px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid var(--mono5);
  background:var(--mono1);
  border-radius:var(--radius-l)
  }
  [craft-baggage-copy] {
  cursor:crosshair
  }
  [craft-baggage-paste] {
  cursor:alias
  }
  [craft-baggage-portal] {
  will-change:transform
  }
  [craft-baggage-cursor] {
  position:fixed;
  top:12px;
  left:12px;
  font-size:var(--text-xl);
  z-index:var(--layer-portal);
  opacity:0;
  animation:baggageIn var(--transition-fast) forwards;
  [data-state=closed] & {
  animation:baggageOut var(--transition-med) forwards
  }
  }
  [craft-baggage-cursor]:before {
  content:"👜"
  }
  @keyframes baggageIn {
  0% {
  opacity:.4;
  transform:scale(.2)
  }
  80% {
  transform:scale(1.2)
  }
  to {
  opacity:1;
  transform:none
  }
  }
  @keyframes baggageOut {
  0% {
  opacity:1;
  transform:none
  }
  to {
  opacity:0;
  transform:translate(10px,-10px)
  }
  }
  [craft-force-button] {
  --border:var(--red7);
  --color:var(--red11);
  --background:var(--red3);
  --hover-border:var(--border);
  --hover-color:var(--color);
  --hover-background:var(--background);
  --active-border:var(--red8);
  --active-color:var(--color);
  --active-background:var(--background);
  --focus-color:var(--red8);
  overflow:hidden
  }
  [craft-force-button][data-state=done] {
  --border:var(--red9);
  --hover-border:var(--red9);
  --active-border:var(--red9);
  animation:indicate var(--transition-med)
  }
  [craft-force-button] [basics-button-label] {
  z-index:1
  }
  @keyframes indicate {
  0%,
  to {
  transform:scale(1)
  }
  50% {
  transform:scale(.95)
  }
  }
  [craft-force-indicator] {
  background:var(--red5);
  width:100%;
  position:absolute;
  left:0;
  height:100%;
  top:0;
  z-index:0;
  transform:scaleX(0);
  transform-origin:left center;
  transition:transform 2s linear
  }
  [craft-filter-group],
  [craft-filter] {
  display:flex;
  align-items:center
  }
  [craft-filter] {
  --height:36px;
  z-index:1;
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  cursor:pointer;
  height:var(--height);
  border-radius:var(--height);
  padding:0 var(--gap-2x);
  border:1px solid var(--mono5);
  justify-content:center;
  color:var(--mono11);
  transition:var(--transition-fast);
  transition-property:margin,padding,border-color,border-radius,background,color
  }
  [craft-filter]+[craft-filter] {
  z-index:0;
  margin-left:8px
  }
  [craft-filter][data-state=selected] {
  z-index:1;
  background:var(--mono4);
  border-color:var(--mono8);
  color:var(--mono12)
  }
  [craft-filter][data-state=selected]+[craft-filter][data-state=selected] {
  z-index:0;
  margin-left:-16px;
  padding-left:28px;
  border-top-left-radius:0;
  border-bottom-left-radius:0;
  border-left-color:transparent;
  background:var(--mono3)
  }
  [craft-toast-area] {
  isolation:isolate;
  contain:size style;
  position:fixed;
  bottom:24px;
  right:24px;
  z-index:var(--layer-toasts)
  }
  [craft-toast] {
  display:flex;
  align-items:flex-start;
  background:var(--bg);
  box-shadow:var(--shadow-s)
  }
  [craft-toast] [craft-toast-indicator] {
  flex-shrink:0;
  width:14px;
  height:14px;
  display:flex;
  font-size:10px;
  font-weight:500;
  font-family:var(--font-display);
  font-feature-settings:"salt";
  align-items:center;
  justify-content:center;
  background:var(--mono3);
  border-radius:50%;
  margin-top:2px
  }
  [craft-toast] [craft-toast-text] {
  flex:1 1;
  margin:0 var(--gap-2x)
  }
  [craft-toast] [craft-toast-title] {
  margin:0;
  color:var(--mono12);
  font-size:var(--text-s);
  font-weight:500;
  font-family:var(--font-display)
  }
  [craft-toast] [craft-toast-description] {
  margin:0;
  margin-top:var(--gap);
  color:var(--mono11);
  font-size:var(--text-s);
  line-height:var(--leading-s)
  }
  [craft-toast] [craft-toast-dismiss] {
  padding:var(--gap-s);
  margin:calc(-1 _ var(--gap-s));
  border-radius:var(--radius-s);
  display:flex;
  align-items:center;
  justify-content:center;
  transition:var(--transition-fast);
  transition-property:background,color;
  color:var(--mono9)
  }
  @media (hover:hover) {
  [craft-toast] [craft-toast-dismiss]:hover {
  color:var(--mono12);
  background:var(--mono4)
  }
  }
  [craft-toast] [craft-toast-timer] {
  --length:46;
  circle:last-child {
  --percent:0;
  transform:rotate(270deg);
  transform-origin:center center;
  stroke-dasharray:var(--length);
  stroke-dashoffset:var(--length);
  animation:stroke var(--duration) linear forwards
  }
  }
  [craft-toast] {
  position:absolute;
  bottom:0;
  right:0;
  padding:var(--gap-2x);
  width:360px;
  border:1px solid var(--mono5);
  border-radius:var(--radius);
  will-change:transform,opacity;
  transition:opacity var(--opacity-duration,var(--transition-xx)),transform var(--transition-xx);
  --sibling-offset:calc(10px _ var(--toasts-before));
  --sibling-height:var(--toast-height-before);
  --natural-amount:calc(var(--sibling-height) + var(--sibling-offset));
  --natural-y:calc(-1 _ var(--natural-amount));
  --starting-y:100%;
  opacity:0;
  --y:var(--starting-y);
  --scale:1;
  transform:translateY(var(--y)) translateZ(0) scale(var(--scale))
  }
  [craft-toast][data-visible=true] {
  --y:var(--natural-y);
  opacity:1
  }
  [craft-toast][data-visible=false] {
  --y:var(--natural-y);
  --opacity-duration:2s;
  opacity:0
  }
  @media (hover:hover) {
  [craft-toast]:hover {
  --opacity-duration:var(--transition-fast);
  opacity:1
  }
  }
  [craft-toast][data-remind=true] {
  --scale:1.05
  }
  @media (max-width:768px) {
  [craft-toast] {
  width:calc(100vw - var(--body-margin-left) - var(--body-margin-right))
  }
  }
  @keyframes stroke {
  to {
  stroke-dashoffset:0
  }
  }
  [craft-menu-header] {
  border-top:1px solid var(--mono5);
  border-bottom:1px solid var(--mono5);
  background:var(--alpha);
  -webkit-backdrop-filter:blur(10px);
  backdrop-filter:blur(10px)
  }
  [craft-menu-header],
  [craft-menu] {
  display:flex;
  align-items:center;
  justify-content:center
  }
  [craft-menu] {
  --offset:8px;
  position:relative;
  height:64px;
  padding:0 24px
  }
  [craft-menu-trigger] {
  position:relative;
  cursor:default;
  padding:0 var(--gap-2x)
  }
  [craft-menu-trigger]:after {
  content:"";
  position:absolute;
  left:0;
  width:100%;
  bottom:calc(-1 _ var(--offset));
  height:var(--offset)
  }
  [craft-menu-popup] {
  z-index:var(--layer-header);
  position:absolute;
  top:var(--offset);
  left:0;
  overflow:hidden;
  transition:var(--transition-med);
  will-change:transform,height,width,opacity;
  transition-property:transform,height,width,opacity;
  transform:translate(var(--x,0),var(--y,0));
  transform-origin:50% 0;
  background:var(--bg);
  box-shadow:var(--shadow-s);
  border:1px solid var(--mono5);
  border-radius:var(--radius)
  }
  [craft-menu-popup][data-state=hidden] {
  opacity:0;
  pointer-events:none;
  transition-property:opacity
  }
  [craft-menu-popup][data-state=entry] {
  transition-property:opacity
  }
  [craft-menu-content] {
  position:absolute;
  top:0;
  left:0;
  padding:var(--gap);
  white-space:nowrap;
  transition:var(--transition-med);
  transition-property:opacity
  }
  [craft-menu-content][data-visible=false] {
  opacity:0;
  pointer-events:none
  }
  @keyframes fadeIn {
  0% {
  opacity:0
  }
  to {
  opacity:1
  }
  }
  [craft-menu-test-item] {
  height:48px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:var(--radius);
  padding:0 var(--gap);
  cursor:pointer
  }
  @media (hover:hover) {
  [craft-menu-test-item]:hover {
  background:var(--mono2)
  }
  }
  [craft-menu-test-item]+[craft-menu-test-item] {
  margin-top:var(--gap-s)
  }
  [craft-meta] {
  border:1px solid var(--mono5);
  border-radius:var(--radius-xs);
  height:32px;
  width:100%;
  display:inline-flex;
  align-items:center;
  overflow:hidden;
  background-color:var(--mono1);
  background-image:repeating-linear-gradient(45deg,transparent,transparent 2px,var(--mono3) 2px,var(--mono3) 3px)
  }
  [craft-meta]>div {
  display:flex;
  align-items:center;
  height:100%;
  padding:0 var(--gap-2x);
  background:var(--bg);
  color:var(--mono9);
  font:500 var(--text-xs) /var(--leading-s) var(--font-display);
  font-feature-settings:"tnum","zero";
  border-right:1px solid var(--mono5)
  }
  [craft-meta]>div:last-child {
  border-right:none;
  border-left:1px solid var(--mono5);
  margin-left:auto
  }
  number-feature {
  display:block;
  overflow:hidden
  }
  number-feature _ {
  transition:var(--transition-slow);
  transition-property:transform,opacity;
  transition-delay:var(--delay,0s);
  will-change:transform,opacity
  }
  number-feature line {
  display:block;
  width:40px;
  height:4px;
  background:#000;
  margin-bottom:16px;
  transform-origin:center left
  }
  number-feature description-side,
  number-feature description-top {
  display:block;
  opacity:1;
  color:var(--mono9);
  font-size:17px
  }
  number-feature number {
  line-height:84px;
  font-size:100px;
  font-weight:600;
  margin-right:16px;
  margin-top:16px
  }
  number-feature flex {
  --delay:0s;
  align-items:flex-end
  }
  number-feature[data-visible=true] flex {
  --delay:400ms
  }
  number-feature[data-visible=false] line {
  transform:scaleX(0)
  }
  number-feature[data-visible=false] description-top {
  transform:translateY(200%);
  opacity:0
  }
  number-feature[data-visible=false] flex {
  transform:translateY(100px)
  }
  flex {
  display:flex;
  align-items:center
  }
  apple-scroller {
  --edge:24px;
  display:block;
  width:100%;
  height:70vh;
  border-radius:var(--radius-xl);
  background:var(--mono12);
  position:sticky;
  top:calc(var(--header-height) + var(--edge));
  width:calc(100vw - var(--edge) - var(--edge));
  transform:translateX(-220px);
  z-index:-1
  }
  apple-scroller-text {
  display:block;
  font-size:64px;
  font-weight:500;
  text-align:center;
  margin-bottom:50%!important;
  color:#fff;
  position:relative;
  z-index:1234
  }
  [craft-textarea] {
  cursor:text;
  position:relative;
  border-radius:var(--radius);
  border:1px solid var(--mono5);
  height:120px;
  width:400px;
  margin:128px;
  display:block;
  background:var(--mono3)
  }
  [craft-textarea] textarea {
  background:none;
  border:none;
  width:100%;
  height:100%;
  resize:none;
  border-radius:inherit;
  outline:none;
  caret-color:transparent
  }
  [craft-textarea] [craft-input-caret] {
  opacity:1;
  left:0;
  top:0;
  transform:translate(var(--x,0),var(--y,0))
  }
  [craft-input] {
  cursor:text;
  position:relative;
  border-radius:var(--radius);
  border:1px solid var(--mono5);
  height:40px;
  overflow:hidden;
  display:inline-flex;
  align-items:center;
  width:400px;
  margin:128px;
  background:var(--mono3)
  }
  [craft-input] input {
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  background:none;
  border:none;
  height:100%;
  width:100%;
  border-radius:inherit;
  padding:0 8px 0 40px;
  outline:none
  }
  [craft-input] input::-moz-selection {
  background:var(--mono7);
  background:#045
  }
  [craft-input] input::selection {
  background:var(--mono7);
  background:#045
  }
  [craft-input]:not(:focus-within) [craft-input-caret] {
  animation:none
  }
  [craft-input]:focus-within [craft-input-caret] {
  opacity:1
  }
  [craft-input-icon] {
  position:absolute;
  left:8px;
  color:var(--mono9)
  }
  [craft-input-placeholder] {
  pointer-events:none;
  position:absolute;
  color:var(--mono9);
  transition:var(--transition-xx);
  transition-property:transform,opacity
  }
  [craft-input-placeholder][data-state=hidden] {
  transform:translateX(10%);
  opacity:0
  }
  [craft-input-values] {
  pointer-events:none;
  position:absolute;
  height:100%;
  left:32px;
  right:8px;
  overflow:auto;
  white-space:pre;
  padding-left:8px;
  display:flex;
  align-items:center;
  scrollbar-width:none;
  -ms-overflow-style:none;
  -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 8px);
  mask-image:linear-gradient(90deg,transparent 0,#000 8px)
  }
  [craft-input-values]::-webkit-scrollbar {
  height:0;
  width:0
  }
  [craft-input-value] {
  position:absolute;
  border-radius:inherit
  }
  [craft-input-value][data-animate=true] {
  transition:var(--transition-xx);
  transition-property:transform,opacity;
  opacity:0;
  transform:translateY(var(--o))
  }
  [craft-input-value-new] {
  opacity:0;
  transform:translateY(var(--n))
  }
  [craft-input-value-new][data-animate=true] {
  transition:var(--transition-xx);
  transition-property:transform,opacity;
  opacity:1;
  transform:none
  }
  [craft-input-measure] {
  width:-moz-fit-content;
  width:fit-content;
  opacity:0
  }
  [craft-input-caret] {
  opacity:0;
  position:absolute;
  left:40px;
  height:20px;
  width:2px;
  border-radius:2px;
  background:var(--mono12);
  background:#00c2ff;
  transition:50ms;
  transition-property:transform;
  transform:translateX(var(--x,0))
  }
  [craft-input-caret][data-animate] {
  animation:blink 1s steps(1) 0s infinite
  }
  @keyframes blink {
  50% {
  opacity:0
  }
  }
  [craft-input-count] {
  position:absolute;
  top:8px;
  left:18px;
  background:var(--mono5);
  color:var(--mono11);
  border-radius:2px;
  padding:1px 3px;
  margin-right:8px;
  font-size:8px;
  font-feature-settings:"tnum"
  }
  [craft-scrollport] {
  margin:16px;
  padding:16px;
  display:flex;
  gap:16px;
  width:300px;
  overflow-x:auto;
  border:1px solid var(--mono5);
  scroll-snap-type:x mandatory
  }
  [craft-scroll-overscroll] {
  width:70%;
  height:200px;
  background:none;
  flex-shrink:0
  }
  [craft-scroll-item] {
  flex-shrink:0;
  width:100%;
  height:200px;
  background:var(--mono3)
  }
  [craft-scroll-item][data-visible=true] {
  background:red
  }
  [craft-scroll-item][data-snap-start=true] {
  background:blue;
  animation:scrollStart 2ms
  }
  @keyframes scrollStart {
  0% {
  scroll-snap-align:center
  }
  to {
  scroll-snap-align:unset
  }
  }
  [craft-snap-toast] {
  width:400px;
  height:200px;
  border:1px solid red;
  display:flex;
  align-items:center;
  overflow-x:auto;
  scroll-snap-type:x mandatory;
  scroll-behavior:smooth;
  --snap:center
  }
  [craft-snap-toast]>_ {
  flex-shrink:0;
  scroll-snap-align:var(--snap)
  }
  [craft-snap-spacer] {
  width:100%;
  height:100%;
  background:red
  }
  [craft-snap-content] {
  width:100%;
  height:100%;
  background:blue
  }
