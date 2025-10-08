import  { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import {
  createNews,
  updateNews,
  deleteNews,
  publishNews,
  fetchAllNews,
} from '../../redux/actions/adminActions';
import { fetchAllCategories } from '../../redux/actions/categoryActions';

const NewsManagement: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { news } = useSelector((state: RootState) => state.admin);
  const { categories } = useSelector((state: RootState) => state.categories);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [editingNews, setEditingNews] = useState<any>(null);

  useEffect(() => {
    dispatch(fetchAllNews);
    dispatch(fetchAllCategories);
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNews) {
      dispatch(updateNews(editingNews._id, { title, content, categoryId }));
    } else {
      dispatch(createNews({ title, content, categoryId }));
    }
    resetForm();
  };

  const handleEdit = (newsItem: any) => {
    setEditingNews(newsItem);
    setTitle(newsItem.title);
    setContent(newsItem.content);
    setCategoryId(newsItem.categoryId._id);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteNews(id));
  };

  const handlePublish = (id: string, published: boolean) => {
    dispatch(publishNews(id, { published }));
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setCategoryId('');
    setEditingNews(null);
  };

  return (
    <div>
      <h2>News Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
          <option value="">Select Category</option>
          {categories.map((cat: any) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button type="submit">{editingNews ? 'Update News' : 'Create News'}</button>
        {editingNews && <button onClick={resetForm}>Cancel</button>}
      </form>

      <div className="news-list">
        <h3>Existing News</h3>
        {news.map((item: any) => (
          <div key={item._id} className="news-item">
            <h4>{item.title}</h4>
            <p>{item.published ? 'Published' : 'Not Published'}</p>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
            <button onClick={() => handlePublish(item._id, !item.published)}>
              {item.published ? 'Unpublish' : 'Publish'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsManagement;