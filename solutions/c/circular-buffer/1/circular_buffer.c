#include "circular_buffer.h"
#include <errno.h>
circular_buffer_t * new_circular_buffer(size_t capacity){
    circular_buffer_t *buf = calloc(1, sizeof(circular_buffer_t) + (capacity * sizeof(buffer_value_t)));
    if (!buf) return NULL;
    buf->head = 0, buf->tail=0, buf->capacity = capacity, buf->used = 0;
    return buf;
}
buffer_status_t read(circular_buffer_t *buffer, buffer_value_t *read_value){
    if (!buffer) { errno = EINVAL; return EXIT_FAILURE;}
    if (buffer->used == 0) { errno = ENODATA; return EXIT_FAILURE;}
    *read_value = buffer->values[buffer->tail++];
    buffer->tail %= buffer->capacity; buffer->used--;
    return EXIT_SUCCESS;    
}
buffer_status_t write(circular_buffer_t *buffer, buffer_value_t write_value){
    if (!buffer) { errno = EINVAL; return EXIT_FAILURE;}
    if (buffer->used == buffer->capacity) {errno = ENOBUFS; return EXIT_FAILURE;}
    buffer->values[buffer->head++] = write_value;
    buffer->head %= buffer->capacity; buffer->used++;
    return EXIT_SUCCESS;
}
buffer_status_t overwrite(circular_buffer_t *buffer, buffer_value_t write_value){
    if (!buffer) { errno = EINVAL; return EXIT_FAILURE;}
    if (buffer->used < buffer->capacity) return write(buffer, write_value);
    buffer->values[buffer->tail] = write_value;
    buffer->head = buffer->tail;
    buffer->tail =  (buffer->tail + 1) % buffer->capacity;
    return EXIT_SUCCESS;
}
void delete_buffer(circular_buffer_t *buffer){
    if (buffer) {free(buffer); buffer = NULL;}
}
void clear_buffer(circular_buffer_t *buffer){
    buffer->head = 0; buffer->tail = 0; buffer->used = 0;
}