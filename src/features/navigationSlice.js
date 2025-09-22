// импортируем createSlice
import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation", // Уникальное имя слайса
  initialState: {
    // Начальное состояние
    activeGender: "women", // По умолчанию активен раздел "women"
  },
  reducers: {
    // Редукторы (редьюсеры) для обновления состояния
    setActiveGender: (state, action) => {
      state.activeGender = action.payload; // Обновляем активный раздел
    },
  },
});

// Экспорт action creator'а для диспетчеризации действий
export const { setActiveGender } = navigationSlice.actions;

// Экспорт редьюсера для подключения к хранилищу
export default navigationSlice.reducer;
