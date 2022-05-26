import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import './Post.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const validationPost = yup.object().shape({
    title:  yup.string().required("Título Obrigatório").max(40, "O título precisa ter no máximo 40 caracteres"),
    description: yup.string().required("Descrição Obrigatório").max(150, "A descrição precisa ter no máximo 150 caracteres"),
    content: yup.string().required("Conteúdo Obrigatório").max(500, "O conteúdo precisa ter no máximo 500 caracteres")
})


export default () => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(validationPost)
    });

    const addPost = data => console.log(data)
    
    return (
        <div>
            <Header/>

            <main>
                <div className="card-post">
                    <h1>Criar postagem</h1>
                    <div className="line-post"></div>

                    <div className="card-body-post">
                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label>Título</label>
                                <input type="text" name="title" {...register("title")}/>
                                <p className="error-message">{errors.title?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Descrição</label>
                                <input type="text" name="description" {...register("description")}/>
                                <p className="error-message">{errors.description?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Conteúdo</label>
                                <textarea type="text" name="content" {...register("content")}></textarea>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>
                            <div className="btn-post">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </main>
        </div>
    )
}