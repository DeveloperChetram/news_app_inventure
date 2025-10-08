import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import {
  createCategory,
  updateCategory,
  deleteCategory,
} from '../../redux/actions/adminActions';
import { fetchAllCategories } from '../../redux/actions/categoryActions';

const CategoryManagement: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.categories);

  const [name, setName] = useState('');
  const [editingCategory, setEditingCategory] = useState<any>(null);

  useEffect(() => {
    dispatch(fetchAllCategories);
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCategory) {
      dispatch(updateCategory(editingCategory._id, { name }));
    } else {
      dispatch(createCategory({ name }));
    }
    resetForm();
  };

  const handleEdit = (category: any) => {
    setEditingCategory(category);
    setName(category.name);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteCategory(id));
  };

  const resetForm = () => {
    setName('');
    setEditingCategory(null);
  };

  return (
    <div>
      <h2>Category Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">{editingCategory ? 'Update Category' : 'Create Category'}</button>
        {editingCategory && <button onClick={resetForm}>Cancel</button>}
      </form>

      <div className="category-list">
        <h3>Existing Categories</h3>
        {categories.map((cat: any) => (
          <div key={cat._id} className="category-item">
            <h4>{cat.name}</h4>
            <button onClick={() => handleEdit(cat)}>Edit</button>
            <button onClick={() => handleDelete(cat._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryManagement;