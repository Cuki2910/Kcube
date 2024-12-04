import * as FormatData from "./interfaceFormat"
import * as ICON from '@/assets/svgXml'

export const lvlData = [
    [ICON.lv1, 'Nhập môn', 'AO5', 30,],
    [ICON.lv2, 'Trung cấp', 'AO5', 15,],
    [ICON.lv3, 'Nâng cao', 'AO12', 15,],
]

export const OLLfomular: { group: string; value: { img: any, text: string[] }[] }[] = [
    {
        group: `Nhóm 1 - Bốn cạnh vàng (2 look OLL)`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-09-bab4d724-b36f-4da7-a584-65a6c9ba670e.jpg?v=1586596085641`,
                text: [
                    `(R U R' U) R U2 R'`,
                    `y' R' U2 (R U R' U) R`,
                    `y L' U2 L U L' U L`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-10-12c0e461-3537-4edf-9dc8-732b6737a693.jpg?v=1586596425280`,
                text: [
                    `R' U' R U' R' U2 R`,
                    `y R U2 R' U' R U' R'`,
                    `y2 (L' U' L U') L' U2 L`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-13-4666be8d-e13d-4c75-8874-7c5dbcebd01c.jpg?v=1586596758535`,
                text: [
                    `(r U R' U') (r' F R F')`,
                    `y2 l' U' L U R U' r' F`,
                    `L F R' F' L' F R F'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-14-51566d9d-ddaa-4431-b7d3-4c56b695e0ac.jpg?v=1586596971889`,
                text: [
                    `(R' F R B') (R' F' R B)`,
                    `y F' r U R' U' r' F R`,
                    `F R' F' r U R U' r'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-15.jpg?v=1565167943283`,
                text: [
                    `(R2 D R' U2) (R D' R' U2) R'`,
                    `(R U R' U) R U2 R2 U' R U' R' U2 R`,
                    `y2 (R2 D' R U2) (R' D R U2) R`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-11-2b03c6e8-39af-4ecc-8f90-807847038beb.jpg?v=1586597109420`,
                text: [
                    `R U2 (R2 U' R2 U' R2) U2 R`,
                    `f R U R' U' f' (F R U R') U' F'`,
                    `R' U2 R2 U R2 U R2 U2 R'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-12.jpg?v=1565168245473`,
                text: [
                    `(R U R' U) R U' R' U R U2 R'`,
                    `y F (R U R' U')x3 F'`,
                    `y (R U2 R' U') (R U R' U') R U' R'`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 2 - Không có cạnh vàng`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-16.jpg?v=1565168430159`,
                text: [
                    `R U2 (R2 F R F') U2 (R' F R F')`,
                    `R U B' R B R2 U' (R' F R F')`,
                    `y R U' R2 D' r U' r' D R2 U R'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-17-91774952-0909-433b-8aae-be5a380170cf.jpg?v=1586588478862`,
                text: [
                    `​y l’ U’ l (U2 L’ U2 L U2) R’ F R`,
                    `F (R U R' U') F' f (R U R' U') f'`,
                    `F (R U R' U') S (R U R' U') f'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-18-1065b064-4915-4e9a-993a-0275e71b47d5.jpg?v=1586589091567`,
                text: [
                    `y F (U R U' R') F' U F (R U R' U') F'`,
                    `y' f (R U R' U') f' U' F (R U R' U') F'`,
                    `r' R2 U R' U r U2 r' U M'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-19-6f1361fe-7e29-4850-a350-bda00611ded9.jpg?v=1586589646496`,
                text: [
                    `y' f (R U R' U') f' U F (R U R' U') F'`,
                    `M U' r U2 r' (U' R U' R') M'`,
                    `y F’ (U’ L’ U L) F U F (R U R’ U’) F’`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-20.jpg?v=1565168470877`,
                text: [
                    `R' U2 F (R U R' U') F2 U2 F R`,
                    `M U (R U R' U') M' (R' F R F')`,
                    `r' R U (R U R' U') r (R2 F R F')`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-21-481abd71-2fab-4fd0-aefa-223b65c6bc78.jpg?v=1586590593927`,
                text: [
                    `y2 F (R U R' U) y' R' U2 (R' F R F')`,
                    `(F R’ F’ R) (U R U’ R’) U F (R U R’ U’) F’`,
                    `r U R' U R U2 r2 (U' R U' R') U2 r`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-22.jpg?v=1565168496710`,
                text: [
                    `(R U R’ U) (R’ F R F’) U2 (R’ F R F’)`,
                    `y2 F R' F' R2 r' U R U' R' U' M'`,
                    `R' F R U' M' U2 r' U' F' U R`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-23.jpg?v=1565168505189`,
                text: [
                    `(M’ U2 M U2) M’ U M (U2 M' U2 M)`,
                    `r' (R U R U R' U') r2 R2 U R U' r'`,
                    `M' U M' U M' U M' U' M' U M' U M' U M'`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 3 - Chữ P`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-48.jpg?v=1565169054814`,
                text: [
                    `L U F’ (U’ L’ U L) F L’`,
                    `L d R' d' L' U L F L'`,
                    `y2 S R U R' U' R' F R f'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-51-bb1dd4d1-d386-4dc2-a3fb-f0f34269d122.jpg?v=1586598590216`,
                text: [
                    `f' (L' U' L U) f`,
                    `y2 F' U' L' U L F`,
                    `y R' U' F' U F R`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-49.jpg?v=1565169066351`,
                text: [
                    `R’ U’ F (U R U’ R’) F’ R`,
                    `y S R U R' U' f' U' F`,
                    `y2 S' (L' U' L U) L F' L' f`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-50-cbd64f70-e3be-4c96-892b-5a539d6082b6.jpg?v=1586598639479`,
                text: [
                    `f (R U R' U') f'`,
                    `y2 F (U R U' R') F'`,
                    `R U2 R2 F R F' U' R U' R'`,
                ]
            },
        ]
    },
    {
        group: `Nhóm 4 - Chữ W`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-55.jpg?v=1565169314492`,
                text: [
                    `(R’ U’ R U’) (R’ U R U) (R B’ R’ B)`,
                    `(R' U' R U') (R' U R U) y F R' F' R`,
                    `y2 L' U' L (U' L' U L) U (L F' L' F)`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-54.jpg?v=1565169324014`,
                text: [
                    `(L U L’ U) (L U’ L’ U’) (L’ B L B’)`,
                    `(L U L' U) (L U' L' U') y2 R' F R F'`,
                    `y2 R' U2 r' D' r U2 r' D R r`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 5 - Chữ C`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-06.jpg?v=1565169402711`,
                text: [
                    `(R U R’ U’) B’ (R’ F R F’) B `,
                    `R U R2 U' R' F (R U R U') F'`,
                    `y2 F (R U R' U') R' F' r U R U' r'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-05.jpg?v=1565169410392`,
                text: [
                    `R’ U’ (R’ F R F’) U R`,
                    `y (F R U R') y' R' U R U2 R'`,
                    `y2 r' F' L' U L U' F r`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 6 - Chữ T`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-53.jpg?v=1565169488393`,
                text: [
                    `(R U R' U') (R' F R F')`,
                    `F R U' R' U R U R' F'`,
                    `y2 (L' U' L U) (L F' L' F)`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-52.jpg?v=1565169497041`,
                text: [
                    `F (R U R' U') F'`,
                    `y2 f (U R U' R') f'`,
                    `y2 F' (L' U' L U) F`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 7 - Chữ I`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-46.jpg?v=1565169592261`,
                text: [
                    `F (U R U’ R’)x2 F’`,
                    `y2 f' (L' U' L U)x2 f`,
                    `y R' U' (R' F R F') R U' R' U2 R`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-47.jpg?v=1565169601467`,
                text: [
                    `L' B' L U' (R' U R U' R' U) R L' B L`,
                    `r' U' r (U' R' U R)x2 r' U r`,
                    `F (R U R' U') R F' (r U R' U') r'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-44.jpg?v=1565169609449`,
                text: [
                    `R U2 R2 (U’ R U’ R’) U2 F R F'`,
                    `r U2 R2 F R F' U2 (r' F R F')`,
                    `R U' y R2 D R' U2 R D' R2 d R'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-45.jpg?v=1565169617695`,
                text: [
                    `(R U R’ U) R d’ R U’ R’ F'`,
                    `(R' U' R U') R' d (R' U R B)`,
                    `(R U R' U) R U' y R U' R' F'`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 8 - Chữ L nhỏ`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-24.jpg?v=1565169806318`,
                text: [
                    `F (R U R' U')x2 F'`,
                    `y2 f (U R U' R')x2 f'`,
                    `(R U2 R' U') (R U R' U2) (R' F R F')`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-25.jpg?v=1565169819292`,
                text: [
                    `F’ (L' U' L U)x2 F`,
                    `R' U' (R' F R F')x2 U R`,
                    `R' U' l' (U R U' R') U R U' x' U R`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-26.jpg?v=1565169830074`,
                text: [
                    `r' U r2 U' r2 U' r2 U r'`,
                    `L’ B L2 F’ L2 B’ L2 F L’`,
                    `y2 R' F R2 B' R2 F' R2 B R'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-27-bcba19c2-1c79-4e94-9b7f-90dc3fabff95.jpg?v=1586855754489`,
                text: [
                    `l U' l2 U l2 U l2 U' l`,
                    `y2 r U' r2 U r2 U r2 U' r`,
                    `R B' R2 F R2 B R2 F' R`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-28-b4b0a554-ca77-4a8c-8046-91cc5d0e12f5.jpg?v=1586855978507`,
                text: [
                    `y r’ U’ r (R' U’ R U)x2 r’ U r`,
                    `y2 l' U' (L U' L' U) (L U' L' U2) l`,
                    `y r' U2 (R U R' U') (R U R' U) r`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-29-845b9d2f-36d2-489f-877c-7eec03759d1b.jpg?v=1586856501996`,
                text: [
                    `r U (R' U R U') (R' U R U2) r'`,
                    `y' r U2 (R' U' R U) (R' U' R U') r'`,
                    `y' r U r' (R U R' U')x2 r U' r'`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 9 - Chữ L lớn`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-01.jpg?v=1565170037649`,
                text: [
                    `l’ U l (U l’ U’ l) y L U’ L’`,
                    `R' (F R U R') F' R F U' F'`,
                    `r' U r (U r' U' r) y R U' R'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-02.jpg?v=1565170044276`,
                text: [
                    `r U’ r’ (U’ r U r’) y’ R’ U R`,
                    `r U' r' (U' r U r') F' U F`,
                    `F U R U2 (R' U' R U) R' F'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-03.jpg?v=1565170052924`,
                text: [
                    `l U l’ (L U L’ U’) l U’ l’`,
                    `R B R' (L U L' U') R B' R'`,
                    `y2 r U r' (R U R' U') r U' r'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-04.jpg?v=1565170061607`,
                text: [
                    `r’ U’ r (R’ U’ R U) r’ U r`,
                    `L' B' L (R' U' R U) L' B L`,
                    `y2 l' U' l (L' U' L U) l' U l`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 10 - Hình vuông`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-43.jpg?v=1565170170552`,
                text: [
                    `r U2 (R' U' R U') r'`,
                    `y' x' D R2 U' R' U R' D' x`,
                    `y2 l U2 (L' U' L U') l'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-42.jpg?v=1565170157050`,
                text: [
                    `r' U2 (R U R' U) r`,
                    `y2 l' U2 (L U L' U) l`,
                    `y2 R' F2 r U r' F R`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 11 - Tia chớp lớn`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-56.jpg?v=1565170622799`,
                text: [
                    `R’ F (R U R’ U’) F’ U R`,
                    `R' F (R U R' U') y L' d R`,
                    `y R r D r' U r D' r' U' R`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-57.jpg?v=1565170631263`,
                text: [
                    `L F’ (L’ U’ L U) F U’ L’`,
                    `y2 R U R' F' U' F U R U2 R'`,
                    `y2 R B' (R' U' R U) B U' R'`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 12 - Tia chớp nhỏ`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-30.jpg?v=1565170709019`,
                text: [
                    `L F R' F R F2 L'`,
                    `r (U R' U R) U2 r'`,
                    `y2 l U L' U L U2 l'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-31.jpg?v=1565170718364`,
                text: [
                    `r’ (U’ R U’ R’) U2 r `,
                    `L' B' L (U' R' U R) L' B L`,
                    `l' U' L U' L' U2 l`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-32.jpg?v=1565170731408`,
                text: [
                    `M (L’ U’ L U’) (L’ U2 L U’) M’`,
                    `U2 r R2' U' R U' R' U2 R U' M`,
                    `y' F (R U R' U') F' U F (R U R' U') F'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-33.jpg?v=1565170742279`,
                text: [
                    `M (R U R’ U) (R U2 R’ U) M’`,
                    `U2 l' L2 U L' U L U2 L' U M`,
                    `r' R2 (U R' U R) U2 R' U M'`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 13 - Con cá`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-35.jpg?v=1565170867309`,
                text: [
                    `(R U R' U') R' F R2 U R' U' F'`,
                    `R' U' R y' x' R U' R' (F R U R')`,
                    `(L' U' L U') (L F' L' F) L' U2 L`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-36.jpg?v=1565170878624`,
                text: [
                    `(R U R' U) (R' F R F') R U2 R'`,
                    `R U R' y R' F R U' R' F' R`,
                    `y2 (L' U' L U) L F' L2 U' L U F`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-41.jpg?v=1565170898735`,
                text: [
                    `F (R U' R' U') (R U R' F')`,
                    `F R' F' R (U R U' R')`,
                    `R' F R F' U' F' U F`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-40-eb084fa5-b87b-42ee-a024-161ca33bb1fc.jpg?v=1596361726691`,
                text: [
                    `R U2 (R2 F R F') R U2 R'`,
                    `f (R U R' U') f' (R U R' U) R U2 R'`,
                    `y' R' U2 R l U' R' U l' U2 R`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 14 - Cờ lê`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-34.jpg?v=1565171081310`,
                text: [
                    `M U (R U R' U') (R' F R F') M'`,
                    `y (R U R' U') R U' R' F' U' (F R U R')`,
                    `L2 U' L B L' U L2 U' (r' U' r)`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-37.jpg?v=1565171091286`,
                text: [
                    `M U' (L' U' L U) (L F' L' F) M'`,
                    `R2' U R' B' R U' R2' U l U l'`,
                    `R2 U R' B' R U' R2 U R B R'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-39-dd633fa6-6908-44cb-82de-12490f07bf3a.jpg?v=1596363655887`,
                text: [
                    `R' U' R U' R' U2 R (F R U R' U' F')`,
                    `M U (F R U R' U' F') M'`,
                    `L' U L U2 L' U' y' L' U L U F`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-38-376587dc-06bd-40a8-a123-38fe4b692f94.jpg?v=1596363762161`,
                text: [
                    `(R U' R' U2) R U y R U' R' U' F'`,
                    `y2 (R U R' U) R U2 R' (F R U R' U' F')`,
                    `R U' R' U2 R U y R U' R' U' F'`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 15 - 4 góc vàng`,
        value: [
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-08-5e8c412e-edf2-448a-ae52-e47f7216020e.jpg?v=1596364194700`,
                text: [
                    `(r U R' U') r' R U R U' R'`,
                    `y2 M' U M U2 M' U M`,
                    `M U M' U2 M U M'`,
                ]
            },
            {
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-oll-07.jpg?v=1565171400358`,
                text: [
                    `(R U R' U') M' (U R U' r')`,
                    `L' (R U R' U') L (R' F R F')`,
                    `M' U M' U M' U2 M U M U M`,
                ]
            }
        ]
    }
]

export const PLLfomular: { group: string, value: { img: any, text: string[], name: string }[] }[] = [
    {
        group: `Nhóm 1 - Hoán vị góc`,
        value: [
            {
                name: `Aa`,
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-01-bd6d92fa-882e-45d0-b197-ac84e8c8a4ea.jpg?v=1564997255220`,
                text: [
                    `x (R' U R') D2 (R U' R') D2 R2`,
                    `l' U R' D2 (R U' R') D2 R2`,
                ]
            },
            {
                name: 'Ab',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-02-5fb54649-6bcd-4102-9018-327e3c74cb8f.jpg?v=1564997261897`,
                text: [
                    `x' (R U' R) D2 (R' U R) D2 R2`,
                    `x R D' R U2 R' D R U2 R2`,
                ]
            },
            {
                name: 'E',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-03-713c44ff-ffaf-48b1-8e70-db51f2ec6086.jpg?v=1564997267875`,
                text: [
                    `x' (R U' R' D) R U R' u2 (R' U R D) R' U' R`,
                    `x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D')`,
                    `x' (L' U L D') (L' U' L D) (L' U' L D') (L' U L D)`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 2 - Hoán vị cạnh`,
        value: [
            {
                name: 'Ua',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-06-d0bdf606-93a5-4753-b1d7-50105d9bc56f.jpg?v=1596532505177`,
                text: [
                    `(R U' R U) R U (R U' R' U') R2`,
                    `M2 U (M U2 M') U M2`,
                    `y2 (R2 U' R' U') R U R U (R U' R)`,
                ]
            },
            {
                name: 'Ub',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-07-4fc00c88-9519-419b-9cd0-0a8107a84c52.jpg?v=1596532513171`,
                text: [
                    `R2 U (R U R' U') R' U' (R' U R')`,
                    `M2 U' (M U2 M') U' M2`,
                    `y2 (R' U R' U') R' U' (R' U R U) R2`,
                ]
            },
            {
                name: 'Z',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-04-cdee24cd-6e9d-4580-8591-fac6b970c07a.jpg?v=1596532521180`,
                text: [
                    `(M2' U M2' U) M' U2 (M2' U2 M')`,
                    `y' M' U (M2' U M2') U (M' U2 M2)`,
                ]
            },
            {
                name: 'H',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-05-30f92456-9c93-4eb0-995c-d24408fa21eb.jpg?v=1596532527745`,
                text: [
                    `(M2' U M2') U2 (M2' U M2')`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 3 - Hoán vị cả cạnh và góc`,
        value: [
            {
                name: 'T',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-10-124d70ec-18e6-4933-bbbd-c7c1a85dc88a.jpg?v=1564997290725`,
                text: [
                    `(R U R' U') (R' F R2 U') R' U' (R U R' F')`
                ]
            },
            {
                name: 'F',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-13-1de6a396-3e67-4806-bb2a-f5a42ac0d960.jpg?v=1596633720108`,
                text: [
                    `R' U' F' (R U R' U') (R' F R2 U') (R' U' R U) (R' U R)`,
                    `y (R' U2 R' U') y (R' F' R2 U') (R' U R' F) R U' F`,
                ]
            },
            {
                name: 'Ja',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-08-5458cb54-20a6-4e8d-8068-3dd47c2a7018.jpg?v=1597583319476`,
                text: [
                    `(R' U L' U2) (R U' R' U2 R) L U'`,
                    `y' (L' U' L F) (L' U' L U) L F' L2' U L`,
                ]
            },
            {
                name: 'Jb',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-09-6dec651e-4053-4c7e-aa2c-67a587d6512a.jpg?v=1564997310729`,
                text: [
                    `(R U R' F') (R U R' U') R' F R2 U' R' U'`
                ]
            },
            {
                name: 'Ra',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-12-b3d1c63e-9e33-4812-9821-28e58eb9dfcd.jpg?v=1596635391506`,
                text: [
                    `(R U' R' U') (R U R D) (R' U' R D') (R' U2 R')`,
                    `y' (L U2' L' U2') L F' (L' U' L U) L F L2' U`,
                    `(R U R' F') (R U2' R' U2') (R' F R U) (R U2 R' U')`,
                ]
            },
            {
                name: 'Rb',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-11-8b4dbf7d-a90e-43ea-b0d1-8ee14e461d8a.jpg?v=1564997339749`,
                text: [
                    `(R' U2 R U2') R' F (R U R' U') R' F' R2`,
                    `(R' U2 R' D') (R U' R' D) (R U R U') (R' U' R U')`,
                ]
            },
            {
                name: 'V',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-18-895ff6b4-037a-4be7-835f-d25c64bb7579.jpg?v=1564997360715`,
                text: [
                    `(R' U R' U') y (R' F' R2 U') (R' U R' F) R F`
                ]
            },
            {
                name: 'Y',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-21-39ec97ce-81e4-458c-ba09-754a01413ab6.jpg?v=1564997369411`,
                text: [
                    `F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')`
                ]
            },
            {
                name: 'Na',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-19-f62ef2d7-7c90-479b-ac4e-f1e19ccbe13f.jpg?v=1597584030843`,
                text: [
                    `(R U R' U) (R U R' F') (R U R' U') (R' F R2 U') R' U2 (R U' R')`,
                    `(L U' R U2) L' U R' (L U' R U2) L' U R'`,
                ]
            },
            {
                name: 'Nb',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-20-1b0a36ee-392b-4ad5-aa91-d995c739da7f.jpg?v=1597584102336`,
                text: [
                    `(R' U R U') (R' F' U' F) (R U R' F) R' F' (R U' R)`,
                    `(R' U L' U2 R U' L) (R' U L' U2 R U' L)`,
                ]
            }
        ]
    },
    {
        group: `Nhóm 4 - Hoán vị chu kỳ cả góc và cạnh (G)`,
        value: [
            {
                name: 'Ga',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-15-e631bf94-be9a-4613-b095-7b296a0bd442.jpg?v=1564997418775`,
                text: [
                    `R2 U (R' U R' U') (R U' R2) D U' (R' U R D')`,
                    `R2 u (R' U R' U') R u' R2 y' (R' U R)`,
                ]
            },
            {
                name: 'Gb',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-16-7e77ba66-e1cb-4777-b187-05133b389357.jpg?v=1564997432922`,
                text: [
                    `(R' U' R) U D' (R2 U R' U) (R U' R U') R2 D`,
                    `(R' U' R) y R2 u (R' U R U' R) u' R2`,
                    `y (F' U' F) (R2 u R' U) (R U' R u') R2`,
                ]
            },
            {
                name: 'Gc',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-14-14f24f82-e1cd-42be-90ea-047afb9ead86.jpg?v=1564997444286`,
                text: [
                    `R2 U' (R U' R U) (R' U R2 D') (U R U' R') D`,
                    `R2 u' (R U' R U) R' u R2 y (R U' R')`,
                ]
            },
            {
                name: 'Gd',
                img: `https://bizweb.dktcdn.net/100/316/286/files/friedrich-pll-17-33127d36-a658-41fc-9888-482df06a79ca.jpg?v=1564997454575`,
                text: [
                    `(R U R') U' D (R2 U' R U') (R' U R' U) R2 D'`,
                    `(R U R') y' (R2 u' R U') (R' U R' u) R2`,
                ]
            }
        ]
    }
]