import React from 'react';
import { User, Edit } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ProfileSection = () => {
    return (
        <Card className="mb-8">
            <CardContent className="p-6">
                <div className="flex items-center gap-6">
                    <Avatar className="w-24 h-24">
                        <AvatarImage src="/api/placeholder/150/150" />
                        <AvatarFallback className="bg-[#6DB1B2]">
                            <User className="w-12 h-12 text-white" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <h2 className="text-xl font-bold">사용자님</h2>
                                <p className="text-gray-600">상태 메시지를 입력해주세요</p>
                            </div>
                            <Button variant="outline" className="flex items-center gap-4">
                                <Edit className="w-4 h-4" />
                                프로필 수정
                            </Button>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <div className="text-center">
                                <p className="text-sm text-gray-600">연속 학습</p>
                                <p className="font-bold text-[#6DB1B2]">7일</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-600">해결한 문제</p>
                                <p className="font-bold text-[#6DB1B2]">42개</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-600">정답률</p>
                                <p className="font-bold text-[#6DB1B2]">85%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfileSection;