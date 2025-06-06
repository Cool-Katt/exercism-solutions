#ifndef CIRCULAR_BUFFER_H
#define CIRCULAR_BUFFER_H
#include <stdint.h>
#include <stdlib.h>
typedef int16_t buffer_value_t;
typedef int16_t buffer_status_t;
typedef struct {
    size_t head, tail, capacity, used;
    buffer_value_t values[];    
} circular_buffer_t;
circular_buffer_t * new_circular_buffer(size_t capacity);
buffer_status_t read(circular_buffer_t *buffer, buffer_value_t *read_value);
buffer_status_t write(circular_buffer_t *buffer, buffer_value_t write_value);
buffer_status_t overwrite(circular_buffer_t *buffer, buffer_value_t write_value);
void clear_buffer(circular_buffer_t *buffer);
void delete_buffer(circular_buffer_t *buffer);
#endif
