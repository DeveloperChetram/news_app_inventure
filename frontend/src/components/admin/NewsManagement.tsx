import { useState } from 'react';import { useState } from 'react';import  { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';import { useDispatch, useSelector } from 'react-redux';import { useSelector, useDispatch } from 'react-redux';

import type { AppDispatch } from '../../redux/store';

import type { RootState } from '../../redux/store';import { useForm } from 'react-hook-form';import { AppDispatch, RootState } from '../../redux/store';

import { createNews, updateNews, deleteNews } from '../../redux/actions/newsActions';

import type { NewsFormData } from '../../redux/actions/newsActions';import type { AppDispatch } from '../../redux/store';import {



interface Category {import type { RootState } from '../../redux/store';  createNews,

  _id: string;

  name: string;import { createNews, updateNews, deleteNews } from '../../redux/actions/adminActions';  updateNews,

}

  deleteNews,

interface News {

  _id: string;interface NewsFormData {  publishNews,

  title: string;

  content: string;  title: string;  fetchAllNews,

  categoryId: {

    _id: string;  content: string;} from '../../redux/actions/adminActions';

    name: string;

  };  categoryId: string;import { fetchAllCategories } from '../../redux/actions/categoryActions';

  published: boolean;

}  published: boolean;



const NewsManagement = () => {}const NewsManagement: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { news } = useSelector((state: RootState) => state.news);  const dispatch: AppDispatch = useDispatch();

  const { categories } = useSelector((state: RootState) => state.admin);

  const [editingId, setEditingId] = useState<string | null>(null);interface News {  const { news } = useSelector((state: RootState) => state.admin);

  const { register, handleSubmit, reset, setValue } = useForm<NewsFormData>();

  _id: string;  const { categories } = useSelector((state: RootState) => state.categories);

  const onSubmit = async (data: NewsFormData) => {

    try {  title: string;

      if (editingId) {

        await dispatch(updateNews({ id: editingId, data }));  content: string;  const [title, setTitle] = useState('');

        setEditingId(null);

      } else {  categoryId: {  const [content, setContent] = useState('');

        await dispatch(createNews(data));

      }    _id: string;  const [categoryId, setCategoryId] = useState('');

      reset();

    } catch (error) {    name: string;  const [editingNews, setEditingNews] = useState<any>(null);

      console.error('Failed to save news:', error);

    }  };

  };

  published: boolean;  useEffect(() => {

  const handleEdit = (newsItem: News) => {

    setEditingId(newsItem._id);}    dispatch(fetchAllNews);

    setValue('title', newsItem.title);

    setValue('content', newsItem.content);    dispatch(fetchAllCategories);

    setValue('categoryId', newsItem.categoryId._id);

    setValue('published', newsItem.published);const NewsManagement = () => {  }, [dispatch]);

  };

  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = async (id: string) => {

    if (window.confirm('Are you sure you want to delete this news article?')) {  const { news } = useSelector((state: RootState) => state.news);  const handleSubmit = (e: React.FormEvent) => {

      try {

        await dispatch(deleteNews(id));  const { categories } = useSelector((state: RootState) => state.admin);    e.preventDefault();

      } catch (error) {

        console.error('Failed to delete news:', error);  const [editingId, setEditingId] = useState<string | null>(null);    if (editingNews) {

      }

    }  const { register, handleSubmit, reset, setValue } = useForm<NewsFormData>();      dispatch(updateNews(editingNews._id, { title, content, categoryId }));

  };

    } else {

  const handleCancel = () => {

    setEditingId(null);  const onSubmit = async (data: NewsFormData) => {      dispatch(createNews({ title, content, categoryId }));

    reset();

  };    if (editingId) {    }



  return (      await dispatch(updateNews(editingId, data));    resetForm();

    <div className="news-management">

      <form onSubmit={handleSubmit(onSubmit)} className="news-form">      setEditingId(null);  };

        <div className="form-group">

          <input    } else {

            type="text"

            placeholder="Title"      await dispatch(createNews(data));  const handleEdit = (newsItem: any) => {

            {...register('title', { required: true })}

            className="form-input"    }    setEditingNews(newsItem);

          />

        </div>    reset();    setTitle(newsItem.title);



        <div className="form-group">  };    setContent(newsItem.content);

          <textarea

            placeholder="Content"    setCategoryId(newsItem.categoryId._id);

            {...register('content', { required: true })}

            className="form-input"  const handleEdit = (news: News) => {  };

            rows={5}

          />    setEditingId(news._id);

        </div>

    setValue('title', news.title);  const handleDelete = (id: string) => {

        <div className="form-group">

          <select    setValue('content', news.content);    dispatch(deleteNews(id));

            {...register('categoryId', { required: true })}

            className="form-input"    setValue('categoryId', news.categoryId._id);  };

          >

            <option value="">Select Category</option>    setValue('published', news.published);

            {categories?.map((category: Category) => (

              <option key={category._id} value={category._id}>  };  const handlePublish = (id: string, published: boolean) => {

                {category.name}

              </option>    dispatch(publishNews(id, { published }));

            ))}

          </select>  const handleDelete = (id: string) => {  };

        </div>

    if (window.confirm('Are you sure you want to delete this news article?')) {

        <div className="form-group checkbox">

          <label>      dispatch(deleteNews(id));  const resetForm = () => {

            <input type="checkbox" {...register('published')} />

            Published    }    setTitle('');

          </label>

        </div>  };    setContent('');



        <div className="form-buttons">    setCategoryId('');

          <button type="submit" className="btn btn-primary">

            {editingId ? 'Update' : 'Add'}  const handleCancel = () => {    setEditingNews(null);

          </button>

          {editingId && (    setEditingId(null);  };

            <button type="button" onClick={handleCancel} className="btn btn-secondary">

              Cancel    reset();

            </button>

          )}  };  return (

        </div>

      </form>    <div>



      <div className="news-list">  return (      <h2>News Management</h2>

        {news?.map((item: News) => (

          <div key={item._id} className="news-item">    <div className="news-management">      <form onSubmit={handleSubmit}>

            <div className="news-info">

              <h3>{item.title}</h3>      <form onSubmit={handleSubmit(onSubmit)} className="news-form">        <input

              <p className="category">Category: {item.categoryId.name}</p>

              <p className="status">Status: {item.published ? 'Published' : 'Draft'}</p>        <div className="form-group">          type="text"

            </div>

            <div className="news-actions">          <input          placeholder="Title"

              <button

                onClick={() => handleEdit(item)}            type="text"          value={title}

                className="btn btn-sm btn-edit"

              >            placeholder="Title"          onChange={(e) => setTitle(e.target.value)}

                Edit

              </button>            {...register('title', { required: true })}          required

              <button

                onClick={() => handleDelete(item._id)}            className="form-input"        />

                className="btn btn-sm btn-delete"

              >          />        <textarea

                Delete

              </button>        </div>          placeholder="Content"

            </div>

          </div>          value={content}

        ))}

      </div>        <div className="form-group">          onChange={(e) => setContent(e.target.value)}

    </div>

  );          <textarea          required

};

            placeholder="Content"        />

export default NewsManagement;
            {...register('content', { required: true })}        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>

            className="form-input"          <option value="">Select Category</option>

            rows={5}          {categories.map((cat: any) => (

          />            <option key={cat._id} value={cat._id}>

        </div>              {cat.name}

            </option>

        <div className="form-group">          ))}

          <select        </select>

            {...register('categoryId', { required: true })}        <button type="submit">{editingNews ? 'Update News' : 'Create News'}</button>

            className="form-input"        {editingNews && <button onClick={resetForm}>Cancel</button>}

          >      </form>

            <option value="">Select Category</option>

            {categories?.map((category) => (      <div className="news-list">

              <option key={category._id} value={category._id}>        <h3>Existing News</h3>

                {category.name}        {news.map((item: any) => (

              </option>          <div key={item._id} className="news-item">

            ))}            <h4>{item.title}</h4>

          </select>            <p>{item.published ? 'Published' : 'Not Published'}</p>

        </div>            <button onClick={() => handleEdit(item)}>Edit</button>

            <button onClick={() => handleDelete(item._id)}>Delete</button>

        <div className="form-group checkbox">            <button onClick={() => handlePublish(item._id, !item.published)}>

          <label>              {item.published ? 'Unpublish' : 'Publish'}

            <input type="checkbox" {...register('published')} />            </button>

            Published          </div>

          </label>        ))}

        </div>      </div>

    </div>

        <div className="form-buttons">  );

          <button type="submit" className="btn btn-primary">};

            {editingId ? 'Update' : 'Add'}

          </button>export default NewsManagement;
          {editingId && (
            <button type="button" onClick={handleCancel} className="btn btn-secondary">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="news-list">
        {news?.map((item: News) => (
          <div key={item._id} className="news-item">
            <div className="news-info">
              <h3>{item.title}</h3>
              <p className="category">Category: {item.categoryId.name}</p>
              <p className="status">Status: {item.published ? 'Published' : 'Draft'}</p>
            </div>
            <div className="news-actions">
              <button
                onClick={() => handleEdit(item)}
                className="btn btn-sm btn-edit"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-sm btn-delete"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsManagement;