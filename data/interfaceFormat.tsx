export interface StorageItem {
    user: UserFormat,
    match: MatchHistoryFormat,
    room: RoomFormat,
    guide: GuideFormat
}

export interface UserFormat {
    name: string;
    star: number
    id: string
    best?: [number, number, number]
    avtar?: string
}

export interface MatchHistoryFormat {
    date: Date
    time: number
    lvl: 'Beginner' | 'Intermediate' | 'Expert'
    rounds: number[]
    result: number
}

export interface RoomFormat {
    match: MatchHistoryFormat | null,
    id: number,
    pass: string | number,
    public: boolean,
    lvl: string
}

export interface GuideFormat {
    title: string
}