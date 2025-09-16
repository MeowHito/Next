import {useMemberStore } from '@/store/member';
import { useForm } from 'react-hook-form';
export default function AddMemberPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
};

    const onSubmit = (data: any) => {
        console.log(data);
        addMember(data);
        reset();
    }
